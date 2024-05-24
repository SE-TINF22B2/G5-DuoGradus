import { EmailNotifier } from './emailNotifier';
import { User } from '@prisma/client';

describe('NotificationService', () => {
  let emailNotifier: EmailNotifier;
  let user: User;

  beforeEach(async () => {
    emailNotifier = new EmailNotifier();
    user = {
      id: '1',
      displayName: 'Max Mustermann',
      email: '',
      password: 'asdf',
      enabled: true,
      verified: true,
      notificationMethod: 'EMAIL',
    };
  });

  it('should send an email', async () => {
    await emailNotifier.notify(user, 'Test Title', 'Test Content');
  });
});
