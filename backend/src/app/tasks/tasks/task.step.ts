import dayjs from 'dayjs';
import { Task } from './task.base';
import { TaskLog } from './task.types';

export abstract class StepTask extends Task {
  abstract getRequiredSteps(): number;
  abstract getRequiredTimeLimit(): number;

  public start(user: string): TaskLog {
    return {
      status: 'completed',
      start: dayjs().format(),
      points: 0,
    } as TaskLog;
  }
  
  public stop(user: string): TaskLog {
    
  }

}
