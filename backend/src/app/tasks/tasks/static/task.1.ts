import { StepTask } from '../task.step';
import { TaskInfo } from '../task.types';

export class Task1 extends StepTask {
  getRequiredSteps(): number {
    return 1000;
  }
  getInfo(): TaskInfo {
    return {
      id: '1',
      title: 'Ein leichter Start',
      description: 'Erreiche mindestens 1.000 Schritte in der nächsten Stunde',
      conditions: [],
      status: this.userStatus,
    };
  }
}
