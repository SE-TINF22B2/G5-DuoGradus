import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule testing', () => {
  it('should exist', async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
