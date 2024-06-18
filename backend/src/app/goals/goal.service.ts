import { Injectable } from '@nestjs/common';
import { GoalRepository } from '../../db/repositories/goal.repository';
import { Goal, Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
import { FitnessService } from '../../integration/fitness/fitness.service';

export class FitnessDataNotAvailable extends Error {}

@Injectable()
export class GoalService {
  constructor(
    private goalRepository: GoalRepository,
    private fitnessService: FitnessService,
  ) {}

  private atLeastOneGoalIsTooOld(goals: Goal[]): boolean {
    for (const goal of goals) {
      if (dayjs().subtract(1, 'hour').isAfter(goal.synced)) {
        return true;
      }
    }

    return false;
  }

  public async refreshGoals(userId, existing: Goal[]): Promise<Goal[]> {
    // Verify that the user has at least ony fitness service configured
    const providers = await this.fitnessService.getDatasourcesForUser(userId);

    if (providers.length < 1) return [];

    let fitnessData;
    try {
      fitnessData = await this.fitnessService.getFitnessDataForUser(userId);
    } catch (e) {
      // Seems that the fitness provider is not available anymore
      return [];
    }

    if (!fitnessData) {
      throw new FitnessDataNotAvailable();
    }

    const goals: Goal[] = [];

    for (const rawGoal of fitnessData.goals) {
      if (!existing.find((g) => g.type == rawGoal.type)) {
        const goal = await this.goalRepository.createGoal({
          owner: { connect: { id: userId } },
          type: rawGoal.type,
          source: 'provider',
          value: rawGoal.value,
          target: rawGoal.goal,
          metric: rawGoal.unit.toString(),
          synced: new Date(),
        } as Prisma.GoalCreateInput);

        goals.push(goal);
      } else {
        const goal = await this.goalRepository.updateGoal(
          userId,
          rawGoal.type,
          {
            value: rawGoal.value,
            target: rawGoal.goal,
            metric: rawGoal.unit.toString(),
            synced: new Date(),
          } as Prisma.GoalCreateInput,
        );

        goals.push(goal);
      }
    }

    return goals;
  }

  public async getGoalsForUser(userId): Promise<Goal[]> {
    // Get goals from the database
    const goals = await this.goalRepository.getGoals(userId);

    if (goals.length < 1 || this.atLeastOneGoalIsTooOld(goals)) {
      return await this.refreshGoals(userId, goals);
    }

    return goals;
  }
}
