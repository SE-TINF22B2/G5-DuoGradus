import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { FitnessRepository } from './repositories/fitness.repository';

@Module({
  providers: [PrismaService, UserRepository, FitnessRepository],
  exports: [PrismaService, UserRepository, FitnessRepository],
})
export class PrismaModule {}
