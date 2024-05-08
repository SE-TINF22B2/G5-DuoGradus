import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { Prisma, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { UserRepository } from '../../db/repositories/user.repository';
import { AuthService } from '../../auth/auth.service';
import { TestConstants } from '../../../test/lib/constants';
import { NestRequest } from '../../types/request.type';
import { PrismaModule } from '../../db/prisma.module';
import { Response } from 'express';
import { PatchUserDTO } from './patch.user.dto';

describe('UserController', () => {
  let controller: UserController;
  let repository: DeepMockProxy<UserRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [UserController],
      providers: [UserRepository, AuthService],
    })
      .overrideProvider(UserRepository)
      .useValue(mockDeep<UserRepository>())
      .compile();

    controller = module.get<UserController>(UserController);
    repository = module.get(UserRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a SanitizedUser object in a gest request', async () => {
    const user: User = {
      id: '1',
      displayName: 'Max Mustermann',
      email: 'max@mustermann.de',
      password: '1234',
      verified: true,
      enabled: true,
    };

    const req = {
      user,
    };

    const response = (await controller.getMe(req)) as any;

    expect(response?.password).toBeUndefined();
  });

  it('should be able to change information about a user', async () => {
    repository.updateUser.mockResolvedValue(
      TestConstants.database.users.exampleUser,
    );

    const changeQuery: Prisma.UserUpdateInput = {
      displayName: 'Test 1',
      email: 'test1@example.org',
      password: 'TEST123',
    };

    const mockRequest = {
      user: {
        id: TestConstants.database.users.exampleUser.id,
      },
    } as NestRequest;

    const mockResponse = mockDeep<Response>();
    mockResponse.status.mockReturnThis();

    await controller.patchMe(
      mockRequest,
      {
        displayName: changeQuery.displayName as string,
        email: changeQuery.email as string,
        password: changeQuery.password as string,
      },
      mockResponse as any,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(
      TestConstants.database.users.exampleUser,
    );
  });

  it('should not be able to modify a user with an empty modify request', async () => {
    const mockRequest = mockDeep<NestRequest>();
    const mockResponse = mockDeep<Response>();

    mockResponse.status.mockReturnThis();

    await controller.patchMe(
      mockRequest as NestRequest,
      {} as PatchUserDTO,
      mockResponse as Response,
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
  });
});
