import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { EmailNotifier } from './emailNotifier';

@Injectable()
export class NotificationService {
  private readonly notifiers = {
    EMAIL: new EmailNotifier(),
  };

  /**
   * Sends a notification to a user via the method specified in the users settings.
   * @param user User receiving the notification
   * @param title Title of the notification
   * @param content Message content of the notification
   */
  notify(user: User, title: string, content: string): void {
    // only supports email notifications for now
    this.notifiers[user.notificationMethod]?.notify(user, title, content);
  }
}
