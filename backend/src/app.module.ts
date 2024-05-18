import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './api/user/user.controller';
import { PrismaModule } from './db/prisma.module';
import { LOGGER_SERVICE } from './logger/logger.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatasourceController } from './api/datasource/datasource.controller';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController, UserController, DatasourceController],
  providers: [
    AppService,
    {
      useClass: ConsoleLogger,
      provide: LOGGER_SERVICE,
    },
  ],
})
export class AppModule {}
