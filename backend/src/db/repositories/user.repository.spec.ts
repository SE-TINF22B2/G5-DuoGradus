import { UserRepository } from './user.repository';
import { PrismaService } from '../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';

describe('UserRepository tests', () => {
  let userRepository: UserRepository;
  let prisma: DeepMockProxy<PrismaService>;

  const exampleUser = {
    id: '0',
    email: 'max@example.org',
    displayName: 'Max Mustermann',
    password: '1234',
    enabled: true,
    verified: false,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    userRepository = module.get(UserRepository);
    prisma = module.get(PrismaService);
  });

  it("should be able to retrieve a user by it's mail", async () => {
    prisma.user.findUnique.mockResolvedValue(exampleUser);

    const user = await userRepository.findByEmail(exampleUser.email);
    expect(user).toEqual(exampleUser);
  });

  it('should be able to create a user', async () => {
    prisma.user.create.mockResolvedValue(exampleUser);

    const user = await userRepository.createUser(
      exampleUser.email,
      exampleUser.displayName,
      exampleUser.password,
    );
    expect(user).toEqual(exampleUser);
  });

  it('should be able to delete a user', async () => {
    prisma.user.delete.mockResolvedValue(exampleUser);

    const user = await userRepository.deleteUser({ id: exampleUser.id });
    expect(user).toEqual(exampleUser);
  });

  it('should be able to modify a user', async () => {
    prisma.user.update.mockResolvedValue(exampleUser);

    const user = await userRepository.updateUser(exampleUser);
    expect(user).toEqual(exampleUser);
  });
});
