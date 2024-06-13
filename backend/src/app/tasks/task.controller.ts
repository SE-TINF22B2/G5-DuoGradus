import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ConcurrentTaskError,
  FitnessDataNotAvailable,
  TaskAlreadyCompleted,
  TaskNotAvailableError,
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

  @Put('/:id')
  @UseGuards(AutoGuard)
  public async putTask(
    @Req() req: NestRequest,
    @Param('id') id: string,
    @Body('action') action: string,
    @Res() response: Response,
  ) {
    if (action == 'start') {
      return this.startTask(req, id, response);
    } else if (action == 'stop') {
      return this.stopTask(req, id, response);
    } else {
      response
        .status(500)
        .json({ error: 'action must be either start or stop' });
    }
  }

  private async startTask(req: NestRequest, id: string, response: Response) {
    try {
      await this.taskService.startTask(req.user.id, id);
      const task = await this.taskService.getTask(req.user.id, id);

      return response.json(task?.getInfo());
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
      } else if (e instanceof TaskAlreadyCompleted) {
        return response
          .status(400)
          .json({ error: 'You already completed this task' });
      }

      response.status(500).json({ error: 'Unknown error' });
    }
  }

  private async stopTask(req: NestRequest, id: string, response: Response) {
    await this.taskService.stopTask(req.user.id, id);

    const task = await this.taskService.getTask(req.user.id, id);

    response.status(200).json(task?.getInfo());
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
