import { Test } from '@nestjs/testing';
import { GoalService } from './goal.service';
import { GoalRepository } from '../../db/repositories/goal.repository';
import { FitnessService } from '../../integration/fitness/fitness.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { Goal } from '@prisma/client';
import { TestConstants } from '../../../test/lib/constants';
import * as dayjs from 'dayjs';
import { FitnessData } from '../../integration/fitness/fitness.data';
import { FitnessGoal } from '../../integration/fitness/fitness.goal';
import { MockProvider } from '../../integration/fitness/providers/mock.provider';

describe('GoalService', () => {
  let goalService: GoalService;
  let goalRepository: DeepMockProxy<GoalRepository>;
  let fitnessService: DeepMockProxy<FitnessService>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [GoalService, GoalRepository, FitnessService],
    })
      .overrideProvider(GoalRepository)
      .useValue(mockDeep<GoalRepository>())
      .overrideProvider(FitnessService)
      .useValue(mockDeep<FitnessService>())
      .compile();

    goalService = moduleRef.get<GoalService>(GoalService);
    goalRepository = moduleRef.get(GoalRepository);
    fitnessService = moduleRef.get(FitnessService);
  });

  describe('getGoalsForUser', () => {
    it('should return cached goals, if they are not too old', async () => {
      const goal = {
        userId: TestConstants.database.users.exampleUser.id,
        type: 'steps',
        target: 200,
        value: 100,
        metric: 'steps',
        synced: dayjs().subtract(10, 'minutes').toDate(),
      } as Goal;

      goalRepository.getGoals.mockResolvedValue([goal]);

      const goals = await goalService.getGoalsForUser(
        TestConstants.database.users.exampleUser.id,
      );

      expect(goals.length).toBe(1);
      expect(goals[0]).toStrictEqual(goal);
    });

    it('should refresh goals if the old goals are to old', async () => {
      const goal = {
        userId: TestConstants.database.users.exampleUser.id,
        type: 'steps',
        target: 200,
        value: 100,
        metric: 'steps',
        synced: dayjs().subtract(2, 'hours').toDate(),
      } as Goal;

      goalRepository.getGoals.mockResolvedValue([goal]);

      fitnessService.getFitnessDataForUser.mockResolvedValue({
        goals: [
          {
            type: 'steps',
            goal: 200,
            value: 100,
            unit: 1,
          } as FitnessGoal,
        ],
      } as FitnessData);

      fitnessService.getDatasourcesForUser.mockResolvedValue([
        new MockProvider(),
      ]);

      goalRepository.updateGoal.mockResolvedValue({
        userId: TestConstants.database.users.exampleUser.id,
        type: 'steps',
        target: 200,
        value: 100,
        metric: 'steps',
        synced: goal.synced,
      } as Goal);

      const goals = await goalService.getGoalsForUser(
        TestConstants.database.users.exampleUser.id,
      );

      expect(goals.length).toBe(1);
      expect(goals[0]).toStrictEqual(goal);
    });
  });
});
