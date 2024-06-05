import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { LOGGER_SERVICE } from './logger/logger.service';

describe('AppModule testing', () => {
  it('should exist', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          useClass: ConsoleLogger,
          provide: LOGGER_SERVICE,
        },
      ],
    }).compile();

    expect(module).toBeDefined();
  });
});
