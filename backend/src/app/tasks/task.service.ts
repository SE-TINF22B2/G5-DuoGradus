import { Injectable } from '@nestjs/common';
import { Task1 } from './tasks/static/task.1';
import { Task } from './tasks/task.base';
import { TaskRepository } from '../../db/repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  private availableTasks = {
    '1': Task1,
  };

  /**
   * Returns all available tasks
   *
   * @returns
   */
  public async getTasks(user: string): Promise<Task[]> {
    const logs = await this.taskRepository.getTaskLogsForUser(user);

    return [new Task1()];
  }
}
