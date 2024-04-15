import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { AutoGuard } from '../../auth/auto.guard';

type SanatizedUser = Omit<User, 'password'>;

@Controller('user')
export class UserController {
  _sanatizeUser(user: User): SanatizedUser {
    const sanatizedUser: SanatizedUser & { password?: string } = user;

    delete sanatizedUser.password;
    return sanatizedUser;
  }

  /**
   * /user/me
   *
   * Returns information about the current User
   *
   * @param req
   * @returns
   */
  @Get('/me')
  @UseGuards(AutoGuard)
  async me(@Request() req) {
    return this._sanatizeUser(req.user);
  }
}
