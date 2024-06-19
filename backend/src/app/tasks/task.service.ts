import { Injectable } from '@nestjs/common';
import { Task1 } from './tasks/static/task.1';
import { Task } from './tasks/task.base';
import { TaskRepository } from '../../db/repositories/task.repository';
import * as dayjs from 'dayjs';
import { TaskLog } from '@prisma/client';
import { FitnessService } from '../../integration/fitness/fitness.service';
import { Task2 } from './tasks/static/task2';
import { Task3 } from './tasks/static/task3';
import { StreakService } from '../streaks/streak.service';
import { NotificationService } from '../../notification/notification.service';
import { Task4 } from './tasks/static/task4';

export class ConcurrentTaskError extends Error {}
export class TaskNotAvailableError extends Error {}
export class TaskNotStartedError extends Error {}
export class FitnessDataNotAvailable extends Error {}
export class TaskAlreadyCompleted extends Error {}

@Injectable()
export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private fitnessService: FitnessService,
    private streakService: StreakService,
    private notificationService: NotificationService,
  ) {}

  private availableTasks = {
    '1': Task1,
    '2': Task2,
    '3': Task3,
    '4': Task4,
  };

  private getLogForTask(logs: TaskLog[], task: string): TaskLog | undefined {
    return logs.find((t) => t.task == task);
  }

  /**
   * Returns all available tasks
   *
   * @returns
   */
  public async getTasks(user: string): Promise<Task[]> {
    const logs = await this.taskRepository.getTaskLogsForUser(user);

    const tasksWithLogs = Object.keys(this.availableTasks).map((t) => {
      const log = this.getLogForTask(logs, t);

      return new this.availableTasks[t](
        log?.status || 'not started',
        log?.start,
        log?.end,
      );
    });

    return tasksWithLogs;
  }

  public async getTask(
    user: string,
    taskId: string,
  ): Promise<Task | undefined> {
    if (!(taskId in this.availableTasks)) {
      return;
    }

    const task = this.availableTasks[taskId];

    if (!task) {
      return undefined;
    }

    const log = await this.taskRepository.getTaskLog(user, taskId);

    return new task(log?.status ?? 'not started');
  }

  public async startTask(user: string, task: string): Promise<TaskLog> {
    // Only one concurrent task should be allowed
    const startedTasks = await this.taskRepository.getStartedTasksForUser(user);

    if (startedTasks.length > 0) {
      throw new ConcurrentTaskError('User already has a started task');
    }

    // Check whether the task was already completed
    const log = await this.taskRepository.getTaskLog(user, task);

    if (log) {
      // If the log is failed, delete the log and start over
      if (log.status == 'failed') {
        await this.taskRepository.deleteTaskLog(user, task);
      } else {
        throw new TaskAlreadyCompleted();
      }
    }

    if (!(task in this.availableTasks)) {
      throw new TaskNotAvailableError('Task not found');
    }

    const datasources = await this.fitnessService.getDatasourcesForUser(user);

    if (datasources.length < 1) {
      throw new FitnessDataNotAvailable();
    }

    const fitnessData = await datasources[0].getFitnessData(
      user,
      dayjs().toDate(),
      dayjs().toDate(),
    );

    return await this.taskRepository.saveTaskLog({
      task,
      userId: user,
      start: dayjs().toDate(),
      status: 'in progress',
      metadata: JSON.stringify(fitnessData),
    });
  }

  public async stopTask(user: string, task: string) {
    const log = await this.taskRepository.getTaskLog(user, task);

    if (!log || log.end != undefined || log.status != 'in progress') {
      throw new TaskNotStartedError();
    }

    // Verify the task in three minutes
    setTimeout(() => this.verifyTask(user, task), 3 * 1000);

    return await this.taskRepository.updateTaskLog(user, task, {
      status: 'pending',
      end: dayjs().toDate(),
    });
  }

  public async verifyTask(user: string, task: string): Promise<void> {
    const log = await this.taskRepository.getTaskLog(user, task);

    if (!log) {
      console.debug('Log to verify not found');
      throw new Error('no log found to verify');
    }

    // Retrieve the fitness data
    const fitnessData = await this.fitnessService.getFitnessDataForUser(user);

    // Verify the task
    const taskValidator: Task = new this.availableTasks[log.task]();
    const isCompleted = taskValidator.validate(
      JSON.parse(log.metadata!),
      fitnessData!,
    );

    console.debug(`Fitness Task verified: ${isCompleted}`);

    if (isCompleted) {
      const taskInfo = taskValidator.getInfo();

      // Increase the points of the user
      this.streakService.addPoints(user, taskInfo.points);

      // send notification
      this.notificationService.notify(
        user,
        'DuoGradus Task completed!',
        `Congratulations! You completed the task ${taskInfo.title}. You received ${taskInfo.points} points.`,
      );
    }

    this.taskRepository.updateTaskLog(user, task, {
      status: isCompleted ? 'completed' : 'failed',
    });
  }
}
