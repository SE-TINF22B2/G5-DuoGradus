import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationpageComponent } from './authenticationpage.component';

describe('AuthenticationpageComponent', () => {
  let component: AuthenticationpageComponent;
  let fixture: ComponentFixture<AuthenticationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationpageComponent],
      imports: [RouterTestingModule] // Hier RouterTestingModule importieren, um RouterModule zu simulieren
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a router-outlet element', () => {
    const element: HTMLElement = fixture.nativeElement;
    const routerOutlet = element.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});

