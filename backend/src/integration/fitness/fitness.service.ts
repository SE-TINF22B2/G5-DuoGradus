import { FitnessProvider } from './fitness.provider';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { FitBitProvider } from './providers/fitbit.provider';

export class FitnessService {
  constructor(private fitnessRepository: FitnessRepository) {}

  /**
   * Returns the configured fitness service
   * for the user
   *
   * @param userId UUID
   */
  public async getServiceForUser(
    userId: string,
  ): Promise<FitnessProvider | null> {
    const providerData =
      await this.fitnessRepository.getProviderForUser(userId);

    // Try to create an instance for the user
    if (!providerData) {
      return null;
    }

    return null;
  }

  // public async syncUser(userId: string): Promise<void> {}

  public async syncAll(): Promise<void> {}
}
