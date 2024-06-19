import { StepTask } from '../task.step';
import { TaskInfo } from '../task.types';

export class Task4 extends StepTask {
  getRequiredSteps(): number {
    return 4000;
  }
  getInfo(): TaskInfo {
    return {
      id: '3',
      title: 'Schritte-Meister: Junior',
      description: 'Erreiche mindestens 4.000 Schritte',
      points: 20,
      conditions: [],
      status: this.userStatus,
    };
  }
}
