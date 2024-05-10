# Testing

## Einführung

Zum Testen des Frontends wird das Framework Jasmine eingesetzt. Jasmine wird für Unit-Tests einzelner Komponenten verwendet.

Jasmine ist bereits Teil der Initialisierung eines Angular-Projekts mit dem Angular CLI. Es ist ein beliebtes Testframework für JavaScript-Anwendungen und bietet eine klare Syntax zum Schreiben von Unit- und Integrationstests.

Aufgrund von Zeitbeschränkungen und dem damit verbundenen Aufwand wurde entschieden, für das Frontend keine End-to-End-Tests durchzuführen. Außerdem fehlt es im Frontend-Team an der nötigen Kompetenz, um solche Tests in diesem Zeitrahmen korrekt zu erstellen.

## Erste Schritte

Jasmine: <https://jasmine.github.io/>


## Konventionen

Die Unit-Tests werden direkt im gleichen Ordner wie die zu testende Datei abgelegt und haben die Erweiterung `.spec.ts`.


## Beispiel Unit Test

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
