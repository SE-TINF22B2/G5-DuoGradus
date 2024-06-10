import { Prisma, TaskLog } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository {
  constructor(private prismaService: PrismaService) {}

  async getTaskLog(userId: string, taskId: string): Promise<TaskLog | null> {
    return await this.prismaService.taskLog.findUnique({
      where: {
        userId_task: {
          userId,
          task: taskId,
        },
      },
    });
  }

  async getTaskLogsForUser(userId: string): Promise<TaskLog[]> {
    return await this.prismaService.taskLog.findMany({
      where: {
        userId,
      },
    });
  }

  async saveTaskLog(log: Prisma.TaskLogCreateInput): Promise<TaskLog> {
    return await this.prismaService.taskLog.create({ data: log });
  }

  async updateTaskLog(
    userId: string,
    taskId: string,
    log: Prisma.TaskLogUpdateInput,
  ): Promise<TaskLog> {
    return await this.prismaService.taskLog.update({
      where: {
        userId_task: {
          userId,
          task: taskId,
        },
      },
      data: log,
    });
  }

  async deleteTaskLog(userId, string, taskId: string) {
    return await this.prismaService.taskLog.delete({
      where: {
        userId_task: {
          userId,
          task: taskId,
        },
      },
    });
  }

  async getStartedTasksForUser(userId: string): Promise<TaskLog[]> {
    return await this.prismaService.taskLog.findMany({
      where: {
        userId,
        start: undefined,
      },
    });
  }
}
