import { User } from '@prisma/client';

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
