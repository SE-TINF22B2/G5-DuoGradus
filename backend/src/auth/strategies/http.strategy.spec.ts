import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { TestConstants } from '../../../test/lib/constants';
import { HTTPStrategy } from './http.strategy';

describe('HTTPStrategy tests', () => {
  let authService: DeepMockProxy<AuthService>;
  let cut: HTTPStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockDeep(AuthService))
      .compile();

    authService = module.get(AuthService);

    cut = new HTTPStrategy(authService);
  });

  it('should return the user if the credentials are correct', async () => {
    authService.validateUserPassword.mockResolvedValue(
      TestConstants.database.users.exampleUser,
    );

    expect(await cut.validate('max@example.org', '1234')).toEqual(
      TestConstants.database.users.exampleUser,
    );
  });

  it('should fail with an exception if the credentials are invalid', async () => {
    authService.validateUserPassword.mockResolvedValue(null);

    expect(async () => {
      await cut.validate('max@example.org', '1234');
    }).rejects.toThrow();
  });
});
