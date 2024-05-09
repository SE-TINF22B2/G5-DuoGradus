import { Request } from 'express';

export type NestRequest = Request & {
  user: { id: string };
};
