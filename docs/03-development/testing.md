# Testing

## Backend

### Introduction

Since backend and frontend use the same technology, the same testing framework can be used for both. [Mocha](https://github.com/mochajs/mocha) and [Jest](https://github.com/jestjs/jest) were considered as testing frameworks. Jest was chosen, because it is more commonly used and the team was more familiar with it. NestJS, which is used as the backend framework, also uses jest for testing by default.

### Getting started

<https://jestjs.io/docs/getting-started>
<https://docs.nestjs.com/fundamentals/testing#unit-testing>

### Conventions

Tests should be defined in a `test` folder in both the frontend and backend directories. Unit test files use the file ending `.spec.ts`. End to end tests use the `.e2e-spec.ts` file ending.

For unit tests we use the assertions provided by Jest. For end to end tests we use [`supertest`](https://github.com/ladjs/supertest).

### Example Unit Test

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

#### Example End to End Test

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

## Frontend

### Introduction

For testing the frontend, two frameworks are used: Jasmine and Protractor. Jasmine is utilized for unit testing individual components, while Protractor is specifically designed for end-to-end (E2E) testing of Angular applications. This combination provides comprehensive coverage of the various types of testing in Angular projects.

Jasmine is already part of the initialization of an Angular project with the Angular CLI. It is a popular testing framework for JavaScript applications and offers a clear syntax for writing unit and integration tests.

On the other hand, Protractor is tailored to the needs of Angular applications and enables the writing of E2E tests.

### Getting Started

Jasmin: https://jasmine.github.io/
Potractor: https://www.protractortest.org/#/

### Conventions

The unit tests are placed directly within the same folder as the file being tested and have the extension `.spec.ts`. End-to-end tests are located in a `test` folder and have the extension `.e2e-spec.ts`.

### Example Unit Test

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingComponent } from './greeting.component';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreetingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct greeting message', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Hello, World!');
  });
});
```

### Example E2E-Test

---

```ts
// Beispiel-E2E-Test: app.e2e-spec.ts

import { browser, by, element } from 'protractor';

describe('Greeting App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display the correct greeting message', () => {
    const greetingMessage = element(by.tagName('h1'));
    expect(greetingMessage.getText()).toEqual('Hello, World!');
  });
});
```
