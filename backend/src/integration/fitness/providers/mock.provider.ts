import { FitnessData } from '../fitness.data';
import {
  FitnessProvider,
  ProviderInfo,
  ProviderStatus,
} from './provider.interface';

export class MockProvider implements FitnessProvider {
  async getFitnessData(
    user: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    start: Date,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    end: Date,
  ): Promise<FitnessData> {
    return {
      dataSource: 'fitbit',
      syncDate: new Date(),
      owner: user,
      activities: [],
      goals: [],
    };
  }
  getInfo(): ProviderInfo {
    return {
      name: 'MockProvider',
      description: 'MOCK',
      status: 'enabled',
    };
  }

  setUserCredentials(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    status: ProviderStatus,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    credentials: {
      type: string;
      refreshToken: string;
      accessToken: string;
      accessTokenExpires: Date;
      userId: string;
      enabled: boolean;
      providerUserId: string;
    } | null,
  ) {
    return null;
  }
  getAuthorizeURL(): string {
    return 'MOCK_AURL';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async authorizeCallback(user: string, code: string): Promise<any> {
    return true;
  }
}
