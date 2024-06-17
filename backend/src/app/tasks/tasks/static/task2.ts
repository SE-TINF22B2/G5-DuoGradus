import { StepTask } from '../task.step';
import { TaskInfo } from '../task.types';

export class Task2 extends StepTask {
  getRequiredSteps(): number {
    return 1000;
  }
  getInfo(): TaskInfo {
    return {
      id: '2',
      title: 'Deine Reise beginnt',
      description: 'Erreiche mindestens 1.000 Schritte',
      points: 10,
      conditions: [],
      status: this.userStatus,
    };
  }
}
