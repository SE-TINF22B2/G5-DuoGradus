import { ConfigService } from '@nestjs/config';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { FitbitProvider } from './providers/fitbit.provider';
import { FitnessProvider } from './providers/provider.interface';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { CredentialService } from '../credentials/credential.service';
import { LOGGER_SERVICE } from '../../logger/logger.service';

@Injectable()
export class FitnessService {
  constructor(
    private fitnessRepository: FitnessRepository,
    private configService: ConfigService,
    private credentialService: CredentialService,
    @Inject(LOGGER_SERVICE)
    private loggerService: LoggerService,
  ) {}

  // public async syncUser(userId: string): Promise<void> {}

  public async syncAll(): Promise<void> {}

  /**
   * Retrieves a list of all available datasources which can be configured
   * by a user.
   *
   * @returns
   */
  public getAvailableDatasources() {
    const providers: FitnessProvider[] = [];

    // Credentials for Fitbit
    const fitbit_client_id = this.configService.get<string>('FITBIT_CLIENT_ID');
    const fitbit_client_secret = this.configService.get<string>(
      'FITBIT_CLIENT_SECRET',
    );

    if (fitbit_client_id && fitbit_client_secret) {
      providers.push(
        new FitbitProvider(
          this.fitnessRepository,
          this.credentialService,
          this.loggerService,
          fitbit_client_id,
          fitbit_client_secret,
        ),
      );
    }

    return providers;
  }

  public async getDatasourcesForUser(
    userId: string,
  ): Promise<FitnessProvider[]> {
    const availableProviders = this.getAvailableDatasources();

    // Retrieve the configured credentials for the user
    const userCredentials =
      await this.fitnessRepository.getProvidersForUser(userId);

    for (const provider of availableProviders) {
      const info = provider.getInfo();

      // Find the credential for the provider
      const credential = userCredentials?.find(
        (cred) => cred.type == info.name,
      );

      if (credential) {
        provider.setUserCredentials('enabled', credential);
      } else {
        provider.setUserCredentials('disabled', null);
      }
    }

    return availableProviders;
  }

  public async getProviderForUserById(
    userId: string,
    name: string,
  ): Promise<FitnessProvider | null> {
    const providers = await this.getDatasourcesForUser(userId);

    const responsibleProvider = providers.find(
      (provider) => provider.getInfo().name == name,
    );

    return responsibleProvider ?? null;
  }
}
