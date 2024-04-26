# Testing

## Introduction

[Mocha](https://github.com/mochajs/mocha) and [Jest](https://github.com/jestjs/jest) were considered as testing frameworks. Jest was chosen, because it is more commonly used and the team was more familiar with it. NestJS, which is used as the backend framework, also uses jest for testing by default.

## Getting started

<https://jestjs.io/docs/getting-started>
<https://docs.nestjs.com/fundamentals/testing#unit-testing>

## Conventions

Tests should be defined in a `test` folder in both the frontend and backend directories. Unit test files use the file ending `.spec.ts`. End to end tests use the `.e2e-spec.ts` file ending.

For unit tests we use the assertions provided by Jest. For end to end tests we use [`supertest`](https://github.com/ladjs/supertest).

## Example Unit Test

```ts
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
```

## Example End to End Test

```ts
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer()).get('/cats').expect(200).expect({
      data: catsService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
```
