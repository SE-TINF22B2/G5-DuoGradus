import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { EmailNotifier } from './emailNotifier';

@Injectable()
export class NotificationService {
  emailNotifier: EmailNotifier;

  constructor() {
    this.emailNotifier = new EmailNotifier();
  }

  notify(user: User, title: string, content: string): void {
    // only supports email notifications for now
    this.emailNotifier.notify(user, title, content);
  }
}
