import { ConfigService } from '@nestjs/config';
import { FitnessRepository } from '../../../db/repositories/fitness.repository';
import { FitnessData } from '../fitness.data';
import { FitnessGoal } from '../fitness.goal';

type FitbitCredentials = {
  accessToken: string;
  userId: string;
};

export class FitBitProvider {
  private FITBIT_API = 'https://api.fitbit.com';
  private FITBIT_API_AUTH = 'https://www.fitbit.com';
  private FITBIT_TYPE = 'fitbit';

  constructor(
    private fitnessRepository: FitnessRepository,
    private configService: ConfigService,
  ) {}

  /**
   * Exchanges a code recieved after an authorized to an access token
   * and persists the client
   *
   * @param user internal id of the user
   * @param code received authorization code
   * @returns api credentials
   */
  private async getAccessTokenFromCode(
    user: string,
    code: string,
  ): Promise<FitbitCredentials> {
    const client_id = this.configService.get<string>(
      'providers.fitbit.client_id',
    );
    const client_secret = this.configService.get<string>(
      'providers.fitbit.client_secret',
    );

    const authorizeURL = new URL(`${this.FITBIT_API_AUTH}/oauth2/token`);
    authorizeURL.searchParams.append(
      'client_id',
      this.configService.get<string>('providers.fitbit.client_id')!,
    );
    authorizeURL.searchParams.append('code', code);
    authorizeURL.searchParams.append('grant_type', 'authorization_code');

    // Retrieve the access token from the server
    const response = await fetch(authorizeURL.toString(), {
      headers: {
        Authorization: btoa(`${client_id}:${client_secret}`),
      },
    });

    if (!response.ok) throw new Error('Invalid response from FitBit');

    const { access_token, refresh_token, expires_in, user_id } =
      await response.json();

    await this.fitnessRepository.createProvider({
      data: {
        type: 'fitbit',
        userId: user,
        providerUserId: user_id,
        accessToken: access_token,
        accessTokenExpires: expires_in,
        refreshToken: refresh_token,
        enabled: true,
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
    const credentials = await this.fitnessRepository.getProviderForUserById(user, 'fitbit');

    if (!credentials) throw new Error('No credentials found for user');

    const client_id = this.configService.get<string>(
      'providers.fitbit.client_id',
    );
    const client_secret = this.configService.get<string>(
      'providers.fitbit.client_secret',
    );

    // Construct the URL
    const authorizeURL = new URL(`${this.FITBIT_API_AUTH}/oauth2/token`);
    authorizeURL.searchParams.append(
      'client_id',
      this.configService.get<string>('providers.fitbit.client_id')!,
    );
    authorizeURL.searchParams.append(
      'refresh_token',
      credentials?.refreshToken,
    );
    authorizeURL.searchParams.append('grant_type', 'authorization_code');

    // Retrieve the access token from the server
    const response = await fetch(authorizeURL.toString(), {
      headers: {
        Authorization: btoa(`${client_id}:${client_secret}`),
      },
    });

    if (!response.ok) throw new Error('No access token received from server');

    const { access_token, refresh_token, expires_in } = await response.json();

    // Persist the access token in the background, to make the request faster
    setTimeout(async () => {
      // Update provider
      await this.fitnessRepository.updateProvider(this.FITBIT_TYPE, user, {
        accessToken: access_token,
        refreshToken: refresh_token,
        accessTokenExpires: expires_in,
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
    const response = await fetch(
      `${this.FITBIT_API}/1/user/${credentials.userId}/activities/goals/daily.json`,
      {
        headers: {
          Authentication: `Bearer ${credentials.userId}`,
        },
      },
    );

    if (!response.ok) throw new Error('Invalid response received from FitBit');

    const json = await response.json();

    const goals: FitnessGoal[] = [
      {
        type: 'steps',
        goal: json['goal']['steps'],
        value: 0,
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

  public getAuthorizeURL(): string {
    const client_id = this.configService.get<string>('providers.fitbit.client_id')!;

    return `https://www.fitbit.com/oauth2/authorize?client_id=${client_id}&response_type=code&scope=activity`
  }

}
