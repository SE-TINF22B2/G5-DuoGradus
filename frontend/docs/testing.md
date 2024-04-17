# Frontend

## Introduction

For testing the frontend, two frameworks are used: Jasmine and Protractor. Jasmine is utilized for unit testing individual components, while Protractor is specifically designed for end-to-end (E2E) testing of Angular applications. This combination provides comprehensive coverage of the various types of testing in Angular projects.

Jasmine is already part of the initialization of an Angular project with the Angular CLI. It is a popular testing framework for JavaScript applications and offers a clear syntax for writing unit and integration tests.

On the other hand, Protractor is tailored to the needs of Angular applications and enables the writing of E2E tests.

## Getting Started

Jasmin: <https://jasmine.github.io/>
Potractor: <https://www.protractortest.org/#/>

## Conventions

The unit tests are placed directly within the same folder as the file being tested and have the extension `.spec.ts`. End-to-end tests are located in a `test` folder and have the extension `.e2e-spec.ts`.

## Example Unit Test

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

## Example E2E-Test

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
