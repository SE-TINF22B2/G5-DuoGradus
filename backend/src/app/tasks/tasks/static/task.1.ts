import { StepTask } from '../task.step';
import { TaskInfo, TaskStatus } from '../task.types';

export class Task1 extends StepTask {
  getRequiredSteps(): number {
    return 100;
  }
  getInfo(): TaskInfo {
    return {
      id: '1',
      title: 'Ein leichter Start',
      description: 'Erreiche mindestens 100 Schritte',
      conditions: [],
      status: this.userStatus,
    };
  }
}
