import { Module } from '@nestjs/common';
import { WebcronController } from './webcron.controller';
import { StreakModule } from '../streaks/streak.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';

@Module({
  imports: [
    StreakModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  exports: [],
  controllers: [WebcronController],
})
export class WebcronModule {}
