import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from 'src/db/repositories/user.repository';

@Module({
  imports: [ConfigModule.forRoot(), UserRepository],
  providers: [NotificationService],
})
export class NotificationModule {}
