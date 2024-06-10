import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AutoGuard } from '../../auth/auto.guard';
import { NestRequest } from '../../types/request.type';

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
  public async startTask(@Req() req: NestRequest, @Param('id') id: string) {
    return await this.taskService.startTask(req.user.id, id);
  }

  @Get('/:id/stop')
  @UseGuards(AutoGuard)
  public async stopTask(@Req() req: NestRequest, @Param('id') id: string) {
    return await this.taskService.stopTask(req.user.id, id);
  }
}
