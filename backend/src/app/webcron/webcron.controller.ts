import { Controller, Get, Param, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { StreakService } from '../streaks/streak.service';
import { NestRequest } from '../../types/request.type';

@Controller('/webcron')
export class WebcronController {
  constructor(
    private configService: ConfigService,
    private streakService: StreakService,
  ) {}

  @Get('/execute/:token')
  public async execute(
    @Res() request: NestRequest,
    @Param('token') token: string,
    @Res() response: Response,
  ) {
    // This endpoint can be only called when a token was set
    const actualToken = this.configService.get<string>('WEBCRON_TOKEN');

    if (!actualToken || actualToken == '' || actualToken == ' ') {
      return response.status(403).json({ error: 'Unauthorized' });
    }

    if (!token || actualToken != token) {
      return response.status(403).json({ error: 'Unauthorized' });
    }

    // If the token was verified, execute the desired functions
    setTimeout(() => {
      try {
        this.streakService.verifyGoalsOfUsers();
      } catch (e) {}
    }, 0);

    response.status(204).json({});
  }
}
