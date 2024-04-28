import { ConsoleLogger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

describe('AppController', () => {
  let appController: AppController;
  let loggerService: LoggerService;
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
    loggerService = new ConsoleLogger();
    appController = new AppController(appService, loggerService);
  });

  describe('getPing', () => {
    it('should call getPing in app service', () => {
      jest.spyOn(appService, 'getPing').mockReturnValue('pong');
      expect(appController.getPing()).toBe('pong');
    });
  });
});
