import { Goal, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalRepository {
  constructor(private client: PrismaService) {}

  public async getGoals(userId: string): Promise<Goal[]> {
    return await this.client.goal.findMany({
      where: {
        userId,
      },
    });
  }

  public async updateGoal(
    userId: string,
    type: string,
    goal: Prisma.GoalUpdateInput,
  ): Promise<Goal> {
    return await this.client.goal.update({
      where: {
        userId_type: {
          userId,
          type,
        },
      },
      data: goal,
    });
  }

  public async createGoal(goal: Prisma.GoalCreateInput): Promise<Goal> {
    return await this.client.goal.create({
      data: goal,
    });
  }

  public async deleteGoalsForUser(userId): Promise<any> {
    return await this.client.goal.deleteMany({
      where: {
        userId,
      },
    });
  }
}
