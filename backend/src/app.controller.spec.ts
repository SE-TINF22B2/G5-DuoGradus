import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('getPing', () => {
    it('should return pong on ping', () => {
      jest.spyOn(appService, 'getPing').mockReturnValue('pong');
      expect(appController.getPing()).toBe('pong');
    });
  });
});
