import { Module } from '@nestjs/common';
import { StreakService } from './streak.service';
import { PrismaModule } from '../../db/prisma.module';
import { StreakController } from './streak.controller';

@Module({
  imports: [PrismaModule],
  providers: [StreakService],
  controllers: [StreakController],
})
export class StreakModule {}
