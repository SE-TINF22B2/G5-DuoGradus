export class FitnessGoal {
  constructor(
    public type: 'steps' | 'distance',
    public goal: number,
    public value: number,
    public unit: number,
  ) {}
}
