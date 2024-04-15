import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { User } from '@prisma/client';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return a SanatizedUser object in a gest request', () => {
    const user : User = {
      id: '1',
      displayName: 'Max Mustermann',
      email: 'max@mustermann.de',
      password: '1234',
      verified: true,
      enabled: true,
    }

    const req = {
      user
    };

    const response = await controller.me(req);

    expect(response?.password).toBeUndefined();
  });
});
