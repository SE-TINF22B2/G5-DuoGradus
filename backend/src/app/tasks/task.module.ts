import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import FitnessModule from '../../integration/fitness/fitness.module';
import { StreakModule } from '../streaks/streak.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [PrismaModule, FitnessModule, StreakModule, NotificationModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
