import { Test } from '@nestjs/testing';
import { PrismaModule } from '../../db/prisma.module';
import { FitnessService } from '../../integration/fitness/fitness.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { MockProvider } from '../../integration/fitness/providers/mock.provider';
import { DatasourceController } from './datasource.controller';
import { NestRequest } from '../../types/request.type';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { Response } from 'express';
import { TestConstants } from '../../../test/lib/constants';
import { ConsoleLogger } from '@nestjs/common';
import { LOGGER_SERVICE } from '../../logger/logger.service';

describe('Datasource controller', () => {
  let fitnessService: DeepMockProxy<FitnessService>;
  let fitnessController: DeepMockProxy<DatasourceController>;
  let fitnessRepository: DeepMockProxy<FitnessRepository>;
  let mockRequest: NestRequest;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        FitnessService,
        { useClass: ConsoleLogger, provide: LOGGER_SERVICE },
      ],
      controllers: [DatasourceController],
    })
      .overrideProvider(FitnessService)
      .useValue(mockDeep<FitnessService>())
      .overrideProvider(FitnessRepository)
      .useValue(mockDeep<FitnessRepository>())
      .compile();

    fitnessService = module.get(FitnessService);
    fitnessController = module.get(DatasourceController);
    fitnessRepository = module.get(FitnessRepository);

    mockRequest = {
      user: {
        id: 'MOCK',
      },
    } as NestRequest;
  });

  it('It should return the datasources for a user', async () => {
    // Mock the datasources
    fitnessService.getDatasourcesForUser.mockResolvedValue([
      new MockProvider(),
    ]);

    const userProviders =
      await fitnessController.getDatasourcesForUser(mockRequest);

    expect(userProviders.length).toBe(1);
  });

  it('Should return a specific datasource for the user', async () => {
    fitnessService.getProviderForUserById.mockResolvedValue(new MockProvider());

    const mockProvider = await fitnessController.getDatasourceForUser(
      mockRequest,
      { id: 'MOCK' },
    );

    expect(mockProvider).toStrictEqual(new MockProvider().getInfo());
  });

  it('Should be able to delete a fitness provider', async () => {
    fitnessRepository.getProviderForUserById.mockResolvedValue(
      TestConstants.database.fitnessCredentials.fitbit,
    );

    const mockResponse = mockDeep<Response>();

    await fitnessController.deleteDatasource(
      mockRequest,
      { id: 'MOCK' },
      mockResponse,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(204);
  });

  it('should resolve the authorize url of the provider', async () => {
    fitnessService.getProviderForUserById.mockResolvedValue(new MockProvider());

    const mockResponse = mockDeep<Response>();
    mockResponse.status.mockReturnThis();

    await fitnessController.getAuthorizeURL(
      mockRequest,
      { id: 'MOCK' },
      mockResponse,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      url: 'MOCK_AURL',
    });
  });

  it('should provide the access token by the user', async () => {
    const mockedProvider = new MockProvider();
    fitnessService.getProviderForUserById.mockResolvedValue(mockedProvider);

    mockRequest.query = {
      code: 'MOCKED_AP',
    } as any;

    const mockResponse = mockDeep<Response>();
    mockResponse.status.mockReturnThis();

    await fitnessController.redirect(mockRequest, 'MOCK', mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it('should return the daily goals', async () => {
    fitnessService.getProviderForUserById.mockResolvedValue(new MockProvider());

    mockRequest.query = {
      code: 'MOCKED_AP',
    } as any;

    const mockResponse = mockDeep<Response>();
    mockResponse.status.mockReturnThis();

    await fitnessController.getGoals(mockRequest, 'MOCK', mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });
});
