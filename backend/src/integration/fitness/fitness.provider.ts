import { FitnessData } from './fitness.data';

export interface FitnessProvider {
  getFitnessData(start: Date, end: Date): Promise<FitnessData>;
}
