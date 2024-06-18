import { Injectable } from '@nestjs/common';
import { EmailNotifier } from './emailNotifier';
import { UserRepository } from '../db/repositories/user.repository';

@Injectable()
export class NotificationService {
  constructor(private userRepository: UserRepository) {}

  private readonly notifiers = {
    EMAIL: new EmailNotifier(),
  };

  /**
   * Sends a notification to a user via the method specified in the users settings.
   * @param user User id receiving the notification
   * @param title Title of the notification
   * @param content Message content of the notification
   */
  async notify(userId: string, title: string, content: string) {
    const user = await this.userRepository.findById(userId);

    // only supports email notifications for now
    this.notifiers?.[user?.notificationMethod ?? '']?.notify(
      userId,
      title,
      content,
    );
  }
}
