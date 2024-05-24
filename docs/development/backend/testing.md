# Tests

## Technologien

Als Test-Frameworks kamen [Mocha](https://github.com/mochajs/mocha) und [Jest](https://github.com/jestjs/jest) in Frage. Die Entscheidung fiel auf Jest, da es weiter verbreitet ist und die Teammitglieder damit mehr Erfahrung haben. Das Backend-Framework NestJS nutzt ebenfalls standardmäßig Jest. Für End-to-End Tests verwenden wir außerdem [supertest](https://github.com/ladjs/supertest).

Dokumentationen:

- <https://jestjs.io/docs/getting-started>
- <https://docs.nestjs.com/fundamentals/testing#unit-testing>

## Konventionen

Unit Tests benutzen die Dateiendung `.spec.ts` und werden direkt im Verzeichnis der zu testenden Datei erstellt. End-to-End Tests werden im Ordner `backend/test` mit der Dateiendung `.e2e-spec.ts` angelegt.

## Beispiel Unit Test

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

## Beispiel End-to-End Test

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
