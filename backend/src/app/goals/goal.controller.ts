import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { NestRequest } from '../../types/request.type';
import { Response } from 'express';
import { FitnessDataNotAvailable, GoalService } from './goal.service';
import { AutoGuard } from '../../auth/auto.guard';
import { Goal } from '@prisma/client';

@Controller('/goal')
export class GoalController {
  constructor(private goalService: GoalService) {}

  private transformGoal(goal: Goal) {
    return {
      type: goal.type,
      creator: goal.source,
      target: goal.target,
      value: goal.value,
      metric: goal.metric,
    };
  }

  @Get('/')
  @UseGuards(AutoGuard)
  public async get(@Req() request: NestRequest, @Res() response: Response) {
    try {
      const goals = await this.goalService.getGoalsForUser(request.user.id);

      return response.status(200).json(goals.map((g) => this.transformGoal(g)));
    } catch (e) {
      if (e instanceof FitnessDataNotAvailable) {
        return response
          .status(400)
          .json({ error: 'No Fitness Provider is available' });
      }

      if (e instanceof Error) {
        console.log(e.stack);
      }

      return response.status(500).json({ error: 'Unknown error' });
    }
  }
}
