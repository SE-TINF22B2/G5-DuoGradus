import { Controller, Get, Param, Req, Res, UseGuards } from '@nestjs/common';
import {
  ConcurrentTaskError,
  FitnessDataNotAvailable,
  TaskNotAvailableError,
  TaskNotStartedError,
  TaskService,
} from './task.service';
import { AutoGuard } from '../../auth/auto.guard';
import { NestRequest } from '../../types/request.type';
import { Response, response } from 'express';

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

      if (e instanceof ConcurrentTaskError) {
        return response
          .status(400)
          .json({ error: 'You already have a running task' });
      }

      response.status(500).json({ error: 'Unknown error' });
    }
  }

  @Get('/:id/stop')
  @UseGuards(AutoGuard)
  public async stopTask(@Req() req: NestRequest, @Param('id') id: string) {
    return await this.taskService.stopTask(req.user.id, id);
  }

  @Get('/:id')
  @UseGuards(AutoGuard)
  public async getTask(
    @Req() req: NestRequest,
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const task = await this.taskService.getTask(req.user.id, id);

    if (!task) {
      return response.status(404).json({ error: 'Task not found' });
    }

    return response.status(200).json(task.getInfo());
  }
}
