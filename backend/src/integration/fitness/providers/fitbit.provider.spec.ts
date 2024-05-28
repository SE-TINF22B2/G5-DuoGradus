import { Test } from '@nestjs/testing';
import { FitnessRepository } from '../../../db/repositories/fitness.repository';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { ConfigService } from '@nestjs/config';
import { FitBitProvider } from './fitbit.provider';
import { TestConstants } from '../../../../test/lib/constants';
import { PrismaModule } from '../../../db/prisma.module';
import { CredentialService } from '../../credentials/credential.service';

describe('Fitbit Provider tests', () => {
  let fitnessRepository: DeepMockProxy<FitnessRepository>;
  let credentialService: DeepMockProxy<CredentialService>;
  let fitbitProvider: FitBitProvider;

  beforeAll(async () => {
    const testModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [FitnessRepository, CredentialService],
    })
      .overrideProvider(FitnessRepository)
      .useValue(mockDeep<FitnessRepository>())
      .overrideProvider(CredentialService)
      .useValue(mockDeep<CredentialService>())
      .compile();

    fitnessRepository =
      testModule.get<DeepMockProxy<FitnessRepository>>(FitnessRepository);
    credentialService =
      testModule.get<DeepMockProxy<CredentialService>>(CredentialService);
    fitbitProvider = new FitBitProvider(
      fitnessRepository,
      credentialService,
      'MOCKED',
      'MOCKED',
    );
  });

  it('Should resolve an access token', async () => {
    // Mock the fitbit environment variables
    credentialService.getCredential.bind(() => {
      return 'MOCKED';
    });

    global.fetch = async () => {
      const responseMock = mockDeep<Response>();
      responseMock.json.mockResolvedValue({
        access_token: 'MOCK_AT',
        refresh_token: 'MOCK',
        expires_in: 0,
        user_id: 'MOCK_USER',
      });

      return responseMock;
    };

    fitnessRepository.createProvider.mockResolvedValue(
      TestConstants.database.fitnessCredentials.fitbit,
    );

    // Call the function
    const result = await fitbitProvider.getAccessTokenFromCode('MOCK', 'MOCK');

    // Expect that the credential have been saved in the database
    expect(fitnessRepository.createProvider).toHaveBeenCalledTimes(1);

    // Expect the mock credentials to have been returned
    expect(result).toBeDefined();
    expect(result.accessToken).toBe('MOCK_AT');
    expect(result.userId).toBe('MOCK_USER');
  });

  it('should retrieve fitness data with a cached access token', async () => {
    // Mock the access token
    credentialService.getCredential.mockReturnValue('MOCK_AT');

    // Mock the response from fitbit
    global.fetch = async () => {
      const response = mockDeep<Response>();

      response.json.mockResolvedValue(fitbitDailySummaryMock);

      return response;
    };

    const result = await fitbitProvider.getFitnessData(
      'MOCK',
      new Date(),
      new Date(),
    );

    expect(result.goals[0].type).toBe('steps');
    expect(result.goals[0].goal).toBe(10000);
    expect(result.goals[0].value).toBe(1698);
  });
});

const fitbitDailySummaryMock = {
  activities: [],
  goals: {
    activeMinutes: 30,
    caloriesOut: 1950,
    distance: 8.05,
    floors: 10,
    steps: 10000,
  },
  summary: {
    activeScore: -1,
    activityCalories: 525,
    calorieEstimationMu: 2241,
    caloriesBMR: 1973,
    caloriesOut: 2628,
    caloriesOutUnestimated: 2628,
    customHeartRateZones: [
      {
        caloriesOut: 2616.7788,
        max: 140,
        min: 30,
        minutes: 1432,
        name: 'Below',
      },
      {
        caloriesOut: 0,
        max: 165,
        min: 140,
        minutes: 0,
        name: 'Custom Zone',
      },
      {
        caloriesOut: 0,
        max: 220,
        min: 165,
        minutes: 0,
        name: 'Above',
      },
    ],
    distances: [
      {
        activity: 'total',
        distance: 1.26,
      },
      {
        activity: 'tracker',
        distance: 1.26,
      },
      {
        activity: 'loggedActivities',
        distance: 0,
      },
      {
        activity: 'veryActive',
        distance: 0,
      },
      {
        activity: 'moderatelyActive',
        distance: 0,
      },
      {
        activity: 'lightlyActive',
        distance: 1.25,
      },
      {
        activity: 'sedentaryActive',
        distance: 0,
      },
    ],
    elevation: 0,
    fairlyActiveMinutes: 0,
    floors: 0,
    heartRateZones: [
      {
        caloriesOut: 1200.33336,
        max: 86,
        min: 30,
        minutes: 812,
        name: 'Out of Range',
      },
      {
        caloriesOut: 1409.4564,
        max: 121,
        min: 86,
        minutes: 619,
        name: 'Fat Burn',
      },
      {
        caloriesOut: 6.98904,
        max: 147,
        min: 121,
        minutes: 1,
        name: 'Cardio',
      },
      {
        caloriesOut: 0,
        max: 220,
        min: 147,
        minutes: 0,
        name: 'Peak',
      },
    ],
    lightlyActiveMinutes: 110,
    marginalCalories: 281,
    restingHeartRate: 77,
    sedentaryMinutes: 802,
    steps: 1698,
    useEstimation: true,
    veryActiveMinutes: 0,
  },
};
