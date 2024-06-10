import { Controller, Get, Param, Req, Res, UseGuards } from '@nestjs/common';
import {
  FitnessDataNotAvailable,
  TaskNotAvailableError,
  TaskNotStartedError,
  TaskService,
} from './task.service';
import { AutoGuard } from '../../auth/auto.guard';
import { NestRequest } from '../../types/request.type';
import { Response } from 'express';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @UseGuards(AutoGuard)
  public async getTasks(@Req() req: NestRequest) {
    return (await this.taskService.getTasks(req.user.id)).map((t) =>
      t.getInfo(),
    );
  }

  @Get('/:id/start')
  @UseGuards(AutoGuard)
  public async startTask(
    @Req() req: NestRequest,
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    try {
      const result = await this.taskService.startTask(req.user.id, id);

      return response.json(result);
    } catch (e) {
      if (e instanceof TaskNotAvailableError) {
        return response.status(400).json({ error: 'Invalid task' });
      } else if (e instanceof FitnessDataNotAvailable) {
        return response
          .status(400)
          .json({ error: 'No fitness provider connected.' });
      }

      response.status(500).json({ error: 'Unknown error' });
    }
  }

  @Get('/:id/stop')
  @UseGuards(AutoGuard)
  public async stopTask(@Req() req: NestRequest, @Param('id') id: string) {
    return await this.taskService.stopTask(req.user.id, id);
  }
}
