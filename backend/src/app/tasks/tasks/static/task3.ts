import { StepTask } from '../task.step';
import { TaskInfo } from '../task.types';

export class Task3 extends StepTask {
  getRequiredSteps(): number {
    return 2000;
  }
  getInfo(): TaskInfo {
    return {
      id: '3',
      title: 'Deine Reise wird fortgesetzt',
      description: 'Erreiche mindestens 2.000 Schritte',
      conditions: [],
      status: this.userStatus,
    };
  }
}
