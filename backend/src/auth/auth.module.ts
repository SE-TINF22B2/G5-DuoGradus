import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { HTTPStrategy } from './strategies/http.strategy';
import { PrismaModule } from '../db/prisma.module';
import { AutoGuard } from './auto.guard';

@Module({
  imports: [PrismaModule, PassportModule],
  providers: [AuthService, HTTPStrategy, AutoGuard],
  exports: [AuthService],
})
export class AuthModule {}
