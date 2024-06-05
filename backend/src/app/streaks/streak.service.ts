import { Injectable } from '@nestjs/common';
import { Streak, StreakHistory } from './streak.type';
import * as dayjs from 'dayjs';
import { StreakRepository } from '../../db/repositories/streak.repository';

@Injectable()
export class StreakService {
  constructor(private repository: StreakRepository) {}

  /**
   * Returns the streak information for a specific user
   *
   * @param user
   * @returns
   */
  public async getStreakOf(user: string): Promise<Streak> {
    // Retrieve the n-last streak entries for the user
    const streakEntries = await this.repository.getStreakHistory(user);

    // If there is no entry for the current day, the points are set to 0
    let points = 0;
    // Same applies to the streak value
    let streak = 0;
    let isStreak = false;

    if (streakEntries.length > 0) {
      // Verify that the streak is still active
      const currentDay = parseInt(dayjs().format('YYMMDD'));

      if (streakEntries[0].day == currentDay) {
        isStreak = true;
        points = streakEntries[0].points;
        streak = streakEntries[0].streak;
      }
    }

    return {
      points,
      streak,
      history: isStreak
        ? streakEntries.map((s) => {
            return {
              day: s.day,
              points: s.points,
              streak: s.streak,
            } as StreakHistory;
          })
        : [],
    };
  }

  /**
   * Adds points for the current user
   *
   * @param user
   * @param points
   */
  public async addPoints(user: string, points: number) {
    const history = await this.repository.getStreakHistory(user, 0, 1);

    if (history.length == 0) {
      await this.createStreak(user, points, 0);
      return;
    }

    const today = parseInt(dayjs().format('YYMMDD'));
    const yesterday = parseInt(dayjs().subtract(1, 'day').format('YYMMDD'));

    if (history[0].day == today) {
      this.repository.updatePoints(user, today, history[0].points + points);
    } else if (history[0].day == yesterday) {
      this.repository.createStreak(user, points, history[0].streak);
    }
  }

  /**
   * Helper to create a streak for today
   *
   * @param user
   * @param points
   * @param streak
   */
  private async createStreak(user: string, points: number, streak = 0) {
    await this.repository.createStreak(
      user,
      parseInt(dayjs().format('YYMMDD')),
      points,
      streak,
    );
  }
}
