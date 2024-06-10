import { Injectable } from '@nestjs/common';
import { Task1 } from './tasks/static/task.1';
import { Task } from './tasks/task.base';
import { TaskRepository } from '../../db/repositories/task.repository';
import * as dayjs from 'dayjs';
import { TaskLog } from '@prisma/client';

export class ConcurrentTaskError extends Error {}
export class TaskNotAvailableError extends Error {}
export class TaskNotStartedError extends Error {}

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  private availableTasks = {
    '1': Task1,
  };

  private getLogForTask(logs: TaskLog[], task: string): TaskLog | undefined {
    return logs.find((t) => (t.task = task));
  }

  /**
   * Returns all available tasks
   *
   * @returns
   */
  public async getTasks(user: string): Promise<Task[]> {
    const logs = await this.taskRepository.getTaskLogsForUser(user);

    const tasksWithLogs = Object.keys(this.availableTasks).map((t) => {
      return new this.availableTasks[t](
        this.getLogForTask(logs, t)?.status || 'unknown',
      );
    });

    return tasksWithLogs;
  }

  public async startTask(user: string, task: string): Promise<TaskLog> {
    // Only one concurrent task should be allowed
    const startedTasks = await this.taskRepository.getStartedTasksForUser(user);

    if (startedTasks.length > 0) {
      throw new ConcurrentTaskError('User already has a started task');
    }

    if (!(task in this.availableTasks)) {
      throw new TaskNotAvailableError('Task not found');
    }

    return await this.taskRepository.saveTaskLog({
      task,
      userId: user,
      start: dayjs().toDate(),
      status: 'in progress',
    });
  }

  public async stopTask(user: string, task: string) {
    const log = await this.taskRepository.getTaskLog(user, task);

    if (!log || log.end != undefined || log.status != 'in progress') {
      throw new TaskNotStartedError();
    }

    return await this.taskRepository.updateTaskLog(user, task, {
      status: 'pending',
      end: dayjs().toDate(),
    });
  }
}
