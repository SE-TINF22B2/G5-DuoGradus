import { ConsoleLogger, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: ConsoleLogger,
  ) {}

  /**
   * Ping
   * @returns {string} "pong"
   */
  @Get('/ping')
  getPing(): string {
    this.logger.log('ping');
    return this.appService.getPing();
  }
}
