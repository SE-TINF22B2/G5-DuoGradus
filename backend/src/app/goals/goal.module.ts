import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { GoalService } from './goal.service';
import { GoalController } from './goal.controller';
import FitnessModule from '../../integration/fitness/fitness.module';

@Module({
  imports: [PrismaModule, FitnessModule],
  providers: [GoalService],
  exports: [GoalService],
  controllers: [GoalController],
})
export class GoalModule {}
