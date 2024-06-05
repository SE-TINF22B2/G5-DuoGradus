import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { FitnessRepository } from './repositories/fitness.repository';
import { StreakRepository } from './repositories/streak.repository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    FitnessRepository,
    StreakRepository,
  ],
  exports: [PrismaService, UserRepository, FitnessRepository, StreakRepository],
})
export class PrismaModule {}
