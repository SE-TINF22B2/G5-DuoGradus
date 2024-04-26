import {
  Body,
  Controller,
  Get,
  Patch,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { AutoGuard } from '../../auth/auto.guard';
import { PathUserDTO } from './patch.user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Response } from 'express';
import { UserRepository } from 'src/db/repositories/user.repository';

type SanatizedUser = Omit<User, 'password'>;

@Controller('user')
export class UserController {
  constructor(
    private authService: AuthService,
    private userRepository: UserRepository,
  ) {}

  _sanatizeUser(user: User): SanatizedUser {
    const sanatizedUser: SanatizedUser & { password?: string } = user;

    delete sanatizedUser.password;
    return sanatizedUser;
  }

  /**
   * /user/me
   *
   * Returns information about the current user
   *
   * @param req
   * @returns
   */
  @Get('/me')
  @UseGuards(AutoGuard)
  async getMe(@Req() req) {
    return this._sanatizeUser(req.user);
  }

  @Patch('/me')
  @UseGuards(AutoGuard)
  async patchMe(
    @Req() req: Request & { user: { id: string } },
    @Body() userPatch: PathUserDTO,
    @Res() res: Response,
  ) {
    const userChanges: Prisma.UserUpdateInput = {};

    if (userPatch.password) {
      const hashedPassword = await this.authService.hashPassword(
        userPatch.password,
      );

      userChanges.password = hashedPassword;
    }

    if (userPatch.email) {
      userChanges.email = userPatch.email;
      userChanges.verified = false;
    }

    if (Object.keys(userChanges).length > 0) {
      const user = await this.userRepository.updateUser(
        req.user.id,
        userChanges,
      );

      return user;
    } else {
      res.statusCode = 400;
      return {
        error: 'Nothing was changed',
      };
    }
  }
}
