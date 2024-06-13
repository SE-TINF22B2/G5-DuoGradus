import { FitnessData } from '../../../integration/fitness/fitness.data';
import { FitnessProvider } from '../../../integration/fitness/providers/provider.interface';
import { TaskInfo, TaskLog, TaskStatus } from './task.types';

/**
 * Task
 *
 * Tasks are challenges for the user, which can be used to gain points. A task
 * has a validate method and checks the previous and current fitness data
 * from the provider of the user
 */
export abstract class Task {
  constructor(
    protected userStatus: TaskStatus = 'unknown',
    protected start?: Date,
    protected stop?: Date,
  ) {}

  abstract getInfo(): TaskInfo;
  abstract validate(previous: FitnessData, current: FitnessData): boolean;
}
