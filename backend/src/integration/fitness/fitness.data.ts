import { FitnessActivity } from './fitness.activity';
import { FitnessGoal } from './fitness.goal';

export class FitnessData {
  constructor(
    public dataSource: 'fitbit' | 'manual' | 'other',
    public syncDate: Date,
    public owner: string,
    public activities: FitnessActivity[],
    public goals: FitnessGoal[],
  ) {}
}
