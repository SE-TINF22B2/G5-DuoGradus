import { ConsoleLogger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './api/user/user.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, UserController],
  providers: [AppService, ConsoleLogger],
})
export class AppModule {}
