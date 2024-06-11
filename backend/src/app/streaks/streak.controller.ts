import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { StreakService } from './streak.service';
import { AutoGuard } from '../../auth/auto.guard';
import { NestRequest } from '../../types/request.type';

@Controller()
export class StreakController {
  constructor(private streakService: StreakService) {}

  @Get('/user/me/streak')
  @UseGuards(AutoGuard)
  public async getStreakForUser(@Req() req: NestRequest) {
    return await this.streakService.getStreakOf(req.user.id);
  }
}
