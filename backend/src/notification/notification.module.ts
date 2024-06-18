import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../db/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule],
  exports: [NotificationService],
  providers: [NotificationService],
})
export class NotificationModule {}
