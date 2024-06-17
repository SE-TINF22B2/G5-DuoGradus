import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { hashSync } from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../db/repositories/user.repository';
import { TestConstants } from '../../test/lib/constants';

describe('AuthService', () => {
  let service: AuthService;
  let userRepository: DeepMockProxy<UserRepository>;

  const exampleUser = {
    id: '0',
    email: 'max@example.org',
    displayName: 'Max Mustermann',
    password: hashSync('1234', 1),
    enabled: true,
    verified: false,
    notificationMethod: 'EMAIL',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserRepository, PrismaClient],
    })
      .overrideProvider(UserRepository)
      .useValue(mockDeep<UserRepository>())
      .compile();

    service = module.get<AuthService>(AuthService);
    userRepository = await module.resolve(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a user when a valid email and password is supplied', async () => {
    userRepository.findByEmail.mockResolvedValue(exampleUser);

    expect(
      await service.validateUserPassword('max@example.org', '1234'),
    ).toBeDefined();
  });

  it('should return null if the user is invalid', async () => {
    userRepository.findByEmail.mockResolvedValue(null);

    expect(
      await service.validateUserPassword('max@example.org', '1234'),
    ).toBeNull();
  });

  it('should return null if the user is found, but the password is incorrect', async () => {
    userRepository.findByEmail.mockResolvedValue(exampleUser);

    expect(
      await service.validateUserPassword('max@example.org', 'incorrect'),
    ).toBeNull();
  });

  it('should be able to create a user and hash the password', async () => {
    jest
      .spyOn(service, 'hashPassword')
      .mockImplementation(async (password) => 'HASHED');

    userRepository.createUser.mockResolvedValue(
      TestConstants.database.users.exampleUser,
    );

    const result = await service.createUser('MOCKED', 'MOCKED', 'MOCKED');

    expect(result).toStrictEqual(TestConstants.database.users.exampleUser);
    expect(userRepository.createUser).toHaveBeenCalledWith(
      'MOCKED',
      'MOCKED',
      'HASHED',
      false,
    );
  });
});
