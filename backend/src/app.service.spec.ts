import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
  });

  describe('getPing', () => {
    it('should return pong on getPing', () => {
      expect(appService.getPing()).toBe('pong');
    });
  });
});
