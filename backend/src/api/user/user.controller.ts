import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { Response } from 'express';
import { AutoGuard } from '../../auth/auto.guard';
import { PatchUserDTO } from './patch.user.dto';
import { RegisterUserDTO } from './register.user.dto';
import { AuthService } from '../../auth/auth.service';
import { NestRequest } from '../../types/request.type';

type SanitizedUser = Omit<User, 'password'>;

@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  _sanitizeUser(user: User): SanitizedUser {
    const sanitizedUser: SanitizedUser & { password?: string } = user;

    delete sanitizedUser.password;
    return sanitizedUser;
  }

  @Post('/')
  async postRegister(@Body() userPatch: RegisterUserDTO, @Res() res: Response) {
    const user = await this.authService.createUser(
      userPatch.email,
      userPatch.displayName,
      userPatch.password,
    );

    if (user) {
      return res.status(201).json({ status: 'Registration was successfull' });
    } else {
      return res
        .status(500)
        .json({ status: 'Registration was not successfull' });
    }
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
    return this._sanitizeUser(req.user);
  }

  @Patch('/me')
  @UseGuards(AutoGuard)
  async patchMe(
    @Req() req: NestRequest,
    @Body() userPatch: PatchUserDTO,
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

    if (userPatch.displayName) {
      userChanges.displayName = userPatch.displayName;
    }

    if (Object.keys(userChanges).length > 0) {
      const user = await this.authService.updateUser(req.user.id, userChanges);

      res.status(200).json(this._sanitizeUser(user));
    } else {
      res.status(400).json({
        error: 'Nothing was changed',
        statusCode: 400,
      });
    }
  }
}
