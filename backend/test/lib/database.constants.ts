import {
  FitnessProviderCredential,
  Points,
  TaskLog,
  User,
} from '@prisma/client';
import * as dayjs from 'dayjs';

export const Users: { exampleUser: User } = {
  exampleUser: {
    id: '0',
    email: 'max@example.org',
    displayName: 'Max Mustermann',
    password: '$2a$04$7r2EqdYAla6UUw9rxMlfc.pACgmONvT/0jFLC2xTLdrIvoxOGmzAC', // 1234
    enabled: true,
    verified: false,
    notificationMethod: 'EMAIL',
  },
};

export const FitnessCredetials = {
  fitbit: {
    type: 'fitbit',
    accessToken: 'MOCK_AT',
    refreshToken: 'MOCK_RF',
    accessTokenExpires: new Date(),
    userId: 'MOCK_UID',
    enabled: true,
    providerUserId: 'MOCK_PUID',
  } as FitnessProviderCredential,
};

export const PointEntries = {
  streakToday: {
    userId: Users.exampleUser.id,
    day: parseInt(dayjs().format('YYMMDD')),
    points: 10,
    streak: 1,
  } as Points,
  streakYesterday: {
    userId: Users.exampleUser.id,
    day: parseInt(dayjs().subtract(1, 'day').format('YYMMDD')),
    points: 10,
    streak: 0,
    goalReached: false,
  } as Points,
  streakTwoDaysAgo: {
    userId: Users.exampleUser.id,
    day: parseInt(dayjs().subtract(2, 'days').format('YYMMDD')),
    points: 10,
    streak: 0,
    goalReached: false,
  } as Points,
  noStreakToday: {
    userId: Users.exampleUser.id,
    day: parseInt(dayjs().format('YYMMDD')),
    points: 10,
    streak: 0,
    goalReached: false,
  },
};

export const TaskLogs = {
  task1: {
    task: '1',
    userId: Users.exampleUser.id,
    start: dayjs().toDate(),
    status: 'pending',
  } as TaskLog,
  task2: {
    task: '2',
    userId: Users.exampleUser.id,
    start: dayjs().subtract(1, 'hour').toDate(),
    end: dayjs().toDate(),
    status: 'failed',
  } as TaskLog,
  task3: {
    task: '3',
    userId: Users.exampleUser.id,
    start: dayjs().subtract(1, 'hour').toDate(),
    end: null,
    status: 'in progress',
  } as TaskLog,
};
