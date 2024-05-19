import { FitnessProviderCredential } from '@prisma/client';

export type ProviderStatus = 'enabled' | 'disabled' | 'error' | 'unknown';

export type ProviderInfo = {
  name: string;
  description: string;
  status: ProviderStatus;
};

export interface FitnessProvider {
  getInfo(): ProviderInfo;
  setUserCredentials(
    status: ProviderStatus,
    credentials: FitnessProviderCredential | null,
  );

  getAuthorizeURL(): string;
  getAccessTokenFromCode(user: string, code: string): Promise<any>;
}
