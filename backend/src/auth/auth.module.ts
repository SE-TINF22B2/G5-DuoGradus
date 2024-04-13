import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRepository } from 'src/db/repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { HTTPStrategy } from './strategies/http.strategy';
import { AutoGuard } from './auto.guard';
import { PrismaModule } from 'src/db/prisma.module';

@Module({
  imports: [PrismaModule, PassportModule],
  providers: [AuthService, HTTPStrategy, AutoGuard]
})
export class AuthModule {}
