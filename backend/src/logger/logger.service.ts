export const LOGGER_SERVICE = 'LOGGER_SERVICE';

export interface LoggerService {
  log(message: string): void;
  error(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
}
