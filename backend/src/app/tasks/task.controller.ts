import { Controller, Get, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AutoGuard } from '../../auth/auto.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @UseGuards(AutoGuard)
  public async getTasks() {
    return (await this.taskService.getTasks()).map((t) => t.getInfo());
  }
}
