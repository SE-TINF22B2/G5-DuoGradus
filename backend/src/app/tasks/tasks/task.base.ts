import { TaskInfo, TaskLog } from './task.types';

export abstract class Task {
  abstract getInfo(): TaskInfo;
  abstract start(user: string): TaskLog;
  abstract stop(user: string): TaskLog;
}
