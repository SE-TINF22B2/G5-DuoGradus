import { FitnessProviderCredential } from '@prisma/client';
import { FitnessRepository } from '../../../db/repositories/fitness.repository';
import { FitnessData } from '../fitness.data';
import { FitnessGoal } from '../fitness.goal';
import {
  FitnessProvider,
  ProviderInfo,
  ProviderStatus,
} from './provider.interface';
import * as dayjs from 'dayjs';
import { CredentialService } from '../../credentials/credential.service';
import { Injectable, LoggerService } from '@nestjs/common';

type FitbitCredentials = {
  accessToken: string;
  userId: string;
};

@Injectable()
export class FitBitProvider implements FitnessProvider {
  private FITBIT_API = 'https://api.fitbit.com';
  private FITBIT_TYPE = 'fitbit';

  private userCredentials: FitnessProviderCredential | null;
  private userStatus: ProviderStatus = 'unknown';

  constructor(
    private fitnessRepository: FitnessRepository,
    private credentialStore: CredentialService,
    private loggerService: LoggerService,
    private client_id: string,
    private client_secret: string,
  ) {}

  setUserCredentials(
    status: ProviderStatus,
    credentials: FitnessProviderCredential | null,
  ) {
    this.userStatus = status;
    this.userCredentials = credentials;
  }

  /**
   * Information about the provider
   *
   * @returns
   */
  getInfo(): ProviderInfo {
    return {
      name: this.FITBIT_TYPE,
      description:
        'Access Activities, Steps and further Data from Fitbit. This supports all devices supported by the Fitbit App, including the Google Pixel Watch',
      status: this.userStatus,
    };
  }

  /**
   * Exchanges a code recieved after an authorized to an access token
   * and persists the client
   *
   * @param user internal id of the user
   * @param code received authorization code
   * @returns api credentials
   */
  public async getAccessTokenFromCode(
    user: string,
    code: string,
  ): Promise<FitbitCredentials> {
    const searchParams = new URLSearchParams();
    searchParams.append('client_id', this.client_id);
    searchParams.append('code', code);
    searchParams.append('grant_type', 'authorization_code');

    // Retrieve the access token from the server
    const response = await fetch(`${this.FITBIT_API}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${this.client_id}:${this.client_secret}`,
        ).toString('base64')}`,
      },
      body: searchParams.toString(),
    });

    if (!response.ok) {
      console.log(await response.text());
      throw new Error('Invalid response from FitBit');
    }

    const { access_token, refresh_token, expires_in, user_id } =
      await response.json();

    this.userStatus = 'enabled';

    await this.fitnessRepository.createProvider({
      type: 'fitbit',
      providerUserId: user_id,
      accessToken: access_token,
      accessTokenExpires: dayjs().add(expires_in, 'seconds').toDate(),
      refreshToken: refresh_token,
      enabled: true,
      owner: {
        connect: {
          id: user,
        },
      },
    });

    return { accessToken: access_token, userId: user_id };
  }

  /**
   * Retrieves a new access token for a configured datasource.
   * The datasource needs to be configured otherwise this will fail.
   *
   * @param user internal id of the user
   * @returns api credentials
   */
  private async getAccessToken(user: string): Promise<FitbitCredentials> {
    // First check, whether the access token is still cached
    const credentialsCache = this.getCredentialsFromCache(user);
    if (credentialsCache) {
      return credentialsCache;
    }

    const credentials = await this.fitnessRepository.getProviderForUserById(
      user,
      'fitbit',
    );

    if (!credentials) throw new Error('No credentials found for user');

    // Construct the URL
    const searchParams = new URLSearchParams();
    searchParams.append('client_id', this.client_id);
    searchParams.append('refresh_token', credentials.refreshToken);
    searchParams.append('grant_type', 'refresh_token');

    // Retrieve the access token from the server
    const response = await fetch(`${this.FITBIT_API}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${this.client_id}:${this.client_secret}`,
        ).toString('base64')}`,
      },
      body: searchParams.toString(),
    });

    if (!response.ok) {
      console.log(await response.text());
      throw new Error('No access token received from server');
    }

    const { access_token, refresh_token, expires_in } = await response.json();

    // Persist the access token in the background, to make the request faster
    setTimeout(async () => {
      // Save the credentials in the local cache
      this.saveCredentials(user, {
        accessToken: credentials.accessToken,
        userId: credentials.providerUserId,
      });

      // Update provider
      await this.fitnessRepository.updateProvider(this.FITBIT_TYPE, user, {
        accessToken: access_token,
        refreshToken: refresh_token,
        accessTokenExpires: dayjs().add(expires_in, 'seconds').toDate(),
      });
    });

    return { accessToken: access_token, userId: credentials.providerUserId };
  }

  /**
   * Daily goals from FitBit
   * Currently only supports steps
   *
   * @param credentials api credentials
   * @returns fitness goals
   */
  private async getDailyGoals(
    credentials: FitbitCredentials,
  ): Promise<FitnessGoal[]> {
    const currentDay = dayjs().format('YYYY-MM-DD');

    const response = await fetch(
      `${this.FITBIT_API}/1/user/${credentials.userId}/activities/date/${currentDay}.json`,
      {
        headers: {
          Authorization: `Bearer ${credentials.accessToken}`,
        },
      },
    );

    if (!response.ok) {
      this.loggerService.error(
        `[Fitbit]: Unable to retrieve daily activities via ${response.url}`,
      );
      throw new Error('Invalid response received from FitBit');
    }

    const json = await response.json();

    const goals: FitnessGoal[] = [
      {
        type: 'steps',
        goal: json['goals']['steps'],
        value: json['summary']['steps'],
        unit: 0,
      },
    ];

    return goals;
  }

  /**
   * Synchronize fitness data for a given timerange
   *
   * @param user internal user id
   * @param start start date
   * @param end end date
   * @returns Fitness Data
   */
  async getFitnessData(
    user: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    start: Date,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    end: Date,
  ): Promise<FitnessData> {
    const credentials = await this.getAccessToken(user);

    return {
      dataSource: 'fitbit',
      syncDate: new Date(),
      owner: user,
      activities: [],
      goals: await this.getDailyGoals(credentials),
    };
  }

  private saveCredentials(user: string, credentials: FitbitCredentials) {
    this.credentialStore.saveCredential(
      `fitbit-credential-${user}`,
      credentials,
    );
  }

  private getCredentialsFromCache(user: string): FitbitCredentials | null {
    return this.credentialStore.getCredential(
      `fitbit-credential-${user}`,
    ) as FitbitCredentials | null;
  }

  public getAuthorizeURL(): string {
    return `https://www.fitbit.com/oauth2/authorize?client_id=${this.client_id}&response_type=code&scope=activity%20profile&20settings`;
  }
}
