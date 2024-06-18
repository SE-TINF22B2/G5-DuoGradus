import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Points, Prisma } from '@prisma/client';

@Injectable()
export class StreakRepository {
  constructor(private prisma: PrismaService) {}

  /**
   * Retrieves the complete streak history for the user
   * Supports paging via skip and limit, default limit is 10 entries
   * The history entries are sorted descending by date
   *
   * @param user
   * @param skip Offset, default 0
   * @param limit Maximum number of history, default 10
   * @returns
   */
  public async getStreakHistory(
    user: string,
    skip = 0,
    limit = 10,
  ): Promise<Points[]> {
    return await this.prisma.points.findMany({
      where: {
        userId: user,
      },
      orderBy: { day: 'desc' },
      skip: skip,
      take: limit,
    });
  }

  /**
   * Adds a new streak to the users history
   *
   * @param user
   * @param day
   * @param points
   * @returns
   */
  public async createStreak(
    user: string,
    day: number,
    points: number,
    streak = 0,
    dailyGoalReached = false,
  ): Promise<Points> {
    return await this.prisma.points.create({
      data: {
        userId: user,
        points,
        day,
        streak,
        goalReached: dailyGoalReached,
      },
    });
  }

  /**
   * Updates the points of a streak
   *
   * @param user
   * @param day
   * @param points
   * @returns
   */
  public async updatePoints(
    user: string,
    day: number,
    points: number,
    dailyGoalReached = false,
  ): Promise<Points> {
    return await this.prisma.points.update({
      where: {
        userId_day: {
          userId: user,
          day: day,
        },
      },
      data: {
        points,
        // There is only the option to set this, but not to unset this, so that the goalReached
        // is not deleted, when a task log is verified.
        goalReached: dailyGoalReached ? dailyGoalReached : undefined,
      },
    });
  }

  /**
   * Removes a single streak entry
   *
   * @param user
   * @param day
   * @returns
   */
  public async deleteStreak(user: string, day: number): Promise<Points> {
    return await this.prisma.points.delete({
      where: {
        userId_day: {
          userId: user,
          day,
        },
      },
    });
  }

  /**
   * Removes the entire streak history of the user
   *
   * @param user
   * @returns
   */
  public async cleanupHistory(user: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.points.deleteMany({
      where: {
        userId: user,
      },
    });
  }
}
