import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './api/user/user.controller';
import { PrismaModule } from './db/prisma.module'; import { LOGGER_SERVICE } from './logger/logger.service';

@Module({
  imports: [AuthModule, PrismaModule],
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
