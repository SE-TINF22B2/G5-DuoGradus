import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { FitnessRepository } from './repositories/fitness.repository';
import { TaskRepository } from './repositories/task.repository';
import { StreakRepository } from './repositories/streak.repository';
import { GoalRepository } from './repositories/goal.repository';
@Module({
  providers: [
    PrismaService,
    UserRepository,
    FitnessRepository,
    StreakRepository,
    TaskRepository,
    GoalRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    FitnessRepository,
    StreakRepository,
    TaskRepository,
    GoalRepository,
  ],
})
export class PrismaModule {}
