import * as dayjs from 'dayjs';
import { StepTask } from '../task.step';
import { TaskInfo } from '../task.types';

export class Task1 extends StepTask {
  getRequiredSteps(): number {
    return 100;
  }
  getInfo(): TaskInfo {
    return {
      id: '1',
      title: 'Ein leichter Start',
      description: 'Erreiche mindestens 100 Schritte',
      points: 10,
      conditions: [],
      status: this.userStatus,
      start: this.start ? dayjs(this.start).format() : undefined,
      stop: this.stop ? dayjs(this.stop).format() : undefined,
    };
  }
}
