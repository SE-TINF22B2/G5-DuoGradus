import dayjs from 'dayjs';
import { Task } from './task.base';
import { FitnessData } from '../../../integration/fitness/fitness.data';

export abstract class StepTask extends Task {
  abstract getRequiredSteps(): number;

  public validate(previous: FitnessData, current: FitnessData): boolean {
    const stepsPrevious = previous.goals.find((g) => g.type == 'steps');
    const stepsNow = current.goals.find((g) => g.type == 'steps');

    // If we have no steps, the user cannot complete this task
    if (!stepsPrevious || !stepsNow) throw new Error('Step data is missing');

    return stepsPrevious.value + this.getRequiredSteps() < stepsNow.value;
  }
}
