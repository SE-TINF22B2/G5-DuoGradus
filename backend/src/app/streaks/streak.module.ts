import { Module } from '@nestjs/common';
import { StreakService } from './streak.service';
import { PrismaModule } from '../../db/prisma.module';
import { StreakController } from './streak.controller';
import { GoalModule } from '../goals/goal.module';

@Module({
  imports: [PrismaModule, GoalModule],
  providers: [StreakService],
  controllers: [StreakController],
  exports: [StreakService],
})
export class StreakModule {}
