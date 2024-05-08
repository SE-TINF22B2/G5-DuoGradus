import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationpageComponent } from './authenticationpage.component';

describe('AuthenticationpageComponent', () => {
  let component: AuthenticationpageComponent;
  let fixture: ComponentFixture<AuthenticationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthenticationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
