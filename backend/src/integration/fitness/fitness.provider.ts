import { FitnessData } from './fitness.data';

export interface FitnessProvider {
  getFitnessData(user: string, start: Date, end: Date): Promise<FitnessData>;
}
