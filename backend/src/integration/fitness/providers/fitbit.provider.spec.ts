import { Test } from '@nestjs/testing';
import { FitnessRepository } from '../../../db/repositories/fitness.repository';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { ConfigService } from '@nestjs/config';

describe('Fitbit Provider tests', () => {
  let fitnessRepository: DeepMockProxy<FitnessRepository>;
  let configService: DeepMockProxy<ConfigService>;

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      providers: [FitnessRepository],
    })
      .overrideProvider(FitnessRepository)
      .useValue(mockDeep<FitnessRepository>())
      .overrideProvider(ConfigService)
      .useValue(mockDeep<ConfigService>())
      .compile();

    fitnessRepository =
      testModule.get<DeepMockProxy<FitnessRepository>>(FitnessRepository);
    configService = testModule.get<DeepMockProxy<ConfigService>>(ConfigService);
  });

  it('Should resolve an access token', async () => {
    // Mock the fitbit environment variables
    configService.get.bind(() => {
      return 'MOCKED';
    });
  });
});
