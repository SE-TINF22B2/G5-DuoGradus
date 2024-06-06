import { Test } from '@nestjs/testing';
import { PrismaModule } from '../../db/prisma.module';
import { StreakService } from './streak.service';
import { StreakRepository } from '../../db/repositories/streak.repository';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { Points } from '@prisma/client';
import { TestConstants } from '../../../test/lib/constants';
import * as dayjs from 'dayjs';
import { Streak } from './streak.type';

describe('streak service testing', () => {
  let cut: StreakService;
  let streakRepository: DeepMockProxy<StreakRepository>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [StreakService],
    })
      .overrideProvider(StreakRepository)
      .useValue(mockDeep<StreakRepository>())
      .compile();

    cut = module.get(StreakService);
    streakRepository = module.get(StreakRepository);
  });

  it('should compute a streak when there is an entry for today', async () => {
    const today = parseInt(dayjs().format('YYMMDD'));
    const yesterday = parseInt(dayjs().subtract(1, 'days').format('YYMMDD'));

    // Mock streak, two days in a row
    streakRepository.getStreakHistory.mockResolvedValue([
      {
        userId: TestConstants.database.users.exampleUser.id,
        points: 1,
        streak: 1,
        day: today,
      },
      {
        userId: TestConstants.database.users.exampleUser.id,
        points: 1,
        streak: 0,
        day: yesterday,
      },
    ] as Points[]);

    const streak = await cut.getStreakOf(
      TestConstants.database.users.exampleUser.id,
    );

    expect(streak).toStrictEqual({
      points: 1,
      streak: 1,
      history: [
        {
          points: 1,
          streak: 1,
          day: today,
        },
        {
          points: 1,
          streak: 0,
          day: yesterday,
        },
      ],
    } as Streak);
  });

  it('should not show a streak if the user lost the streak', async () => {
    // Mock streak, two days in a row
    streakRepository.getStreakHistory.mockResolvedValue([
      TestConstants.database.points.streakTwoDaysAgo,
    ] as Points[]);

    const streak = await cut.getStreakOf(
      TestConstants.database.users.exampleUser.id,
    );

    expect(streak).toStrictEqual({
      points: 0,
      streak: 0,
      history: [],
    } as Streak);
  });

  it('should create a new points entry when there is none', async () => {
    streakRepository.getStreakHistory.mockResolvedValue([]);
    streakRepository.createStreak.mockResolvedValue(
      TestConstants.database.points.noStreakToday,
    );

    // Add points
    await cut.addPoints(TestConstants.database.users.exampleUser.id, 10);

    expect(streakRepository.createStreak).toHaveBeenCalled();
  });

  it('should update the points of the entry when there is one', async () => {
    streakRepository.getStreakHistory.mockResolvedValue([
      TestConstants.database.points.noStreakToday,
    ]);
    streakRepository.updatePoints.mockResolvedValue(
      TestConstants.database.points.noStreakToday,
    );

    // Add points
    await cut.addPoints(TestConstants.database.users.exampleUser.id, 10);

    expect(streakRepository.updatePoints).toHaveBeenCalled();
  });
});
