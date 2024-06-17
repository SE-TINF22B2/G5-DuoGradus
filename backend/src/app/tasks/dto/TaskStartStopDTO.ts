import { IsEnum, IsNotEmpty } from 'class-validator';

export enum TaskAction {
  START = 'start',
  STOP = 'stop',
}

export class TaskStartStopDTO {
  @IsNotEmpty()
  @IsEnum(TaskAction)
  public action: TaskAction;
}
