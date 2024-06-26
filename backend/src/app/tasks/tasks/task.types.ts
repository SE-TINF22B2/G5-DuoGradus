export type TaskInfo = {
  id: string;
  title: string;
  description: string;
  points: number;
  conditions: {
    name: string;
    description: string;
    color: string;
    icon: string;
  }[];
  status: TaskStatus;
  start?: string;
  stop?: string;
};

export type TaskStatus = 'available' | 'completed' | 'locked' | 'unknown';

export type TaskLog = {
  status: 'completed' | 'in progress' | 'failed' | 'pending';
  start?: string;
  end?: string;
  points: number;
};
