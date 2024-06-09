import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { FitnessRepository } from './repositories/fitness.repository';
import { TaskRepository } from './repositories/task.repository';

@Module({
  providers: [PrismaService, UserRepository, FitnessRepository, TaskRepository],
  exports: [PrismaService, UserRepository, FitnessRepository, TaskRepository],
})
export class PrismaModule {}
