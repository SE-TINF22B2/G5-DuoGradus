export class FitnessActivity {
  constructor(
    public type: 'walk' | 'run',
    public start: Date,
    public end: Date,
    public steps: number,
    public elevation: number,
    public reporting: 'tracked' | 'manual' | 'other',
  ) {}
}
