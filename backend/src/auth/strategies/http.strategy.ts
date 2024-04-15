import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '@prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BasicStrategy } from 'passport-http';

@Injectable()
export class HTTPStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * Validates username and password via the Authentication Service
   *
   * @param username
   * @param password
   * @returns
   */
  async validate(username: string, password: string): Promise<User | null> {
    const user = await this.authService.validateUserPassword(
      username,
      password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
