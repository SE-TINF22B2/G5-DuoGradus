import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { FitnessRepository } from './repositories/fitness.repository';
import { TaskRepository } from './repositories/task.repository';
import { StreakRepository } from './repositories/streak.repository';
@Module({
  providers: [
    PrismaService,
    UserRepository,
    FitnessRepository,
    StreakRepository,
    TaskRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    FitnessRepository,
    StreakRepository,
    TaskRepository,
  ],
})
export class PrismaModule {}
