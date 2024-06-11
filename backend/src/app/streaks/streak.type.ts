export type StreakHistory = {
  day: number;
  points: number;
  streak: number;
};

export type Streak = {
  points: number;
  streak: number;
  history: StreakHistory[];
};
