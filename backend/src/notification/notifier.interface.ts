import { User } from '@prisma/client';

export interface Notifier {
  /**
   * Sends a notification to a user via a method (email, push,…) represented by the concrete Notifier class.
   * @param user User receiving the notification
   * @param title Title of the notification
   * @param content Message content of the notification
   */
  notify(user: User, title: string, content: string): void;
}
