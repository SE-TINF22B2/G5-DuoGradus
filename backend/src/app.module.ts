import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './api/user/user.controller';
import { PrismaModule } from './db/prisma.module';
import { LOGGER_SERVICE } from './logger/logger.service';
import { ConfigModule } from '@nestjs/config';
import FitnessModule from './integration/fitness/fitness.module';
import configuration from './config/configuration';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    FitnessModule,
    NotificationModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    {
      useClass: ConsoleLogger,
      provide: LOGGER_SERVICE,
    },
  ],
})
export class AppModule {}
