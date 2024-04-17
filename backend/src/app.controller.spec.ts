import { ConsoleLogger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let logger: ConsoleLogger;
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
    logger = new ConsoleLogger();
    appController = new AppController(appService, logger);
  });

  describe('getPing', () => {
    it('should call getPing in app service', () => {
      jest.spyOn(appService, 'getPing').mockReturnValue('pong');
      expect(appController.getPing()).toBe('pong');
    });
  });
});
