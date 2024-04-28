import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { LOGGER_SERVICE, LoggerService } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(LOGGER_SERVICE)
    private readonly loggerService: LoggerService,
  ) {}

  /**
   * Ping
   * @returns {string} "pong"
   */
  @Get('/ping')
  getPing(): string {
    this.loggerService.log('ping');
    return this.appService.getPing();
  }
}
