import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma.module';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import FitnessModule from '../../integration/fitness/fitness.module';

@Module({
  imports: [PrismaModule, FitnessModule],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
