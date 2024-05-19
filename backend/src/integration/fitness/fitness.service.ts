import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { FitBitProvider } from './providers/fitbit.provider';

export class FitnessService {
  constructor(
    private fitnessRepository: FitnessRepository,
    private fitbitProvider: FitBitProvider,
  ) {}

  public getFitbitProvider(): FitBitProvider {
    return this.fitbitProvider;
  }

  // public async syncUser(userId: string): Promise<void> {}

  public async syncAll(): Promise<void> {}
}
