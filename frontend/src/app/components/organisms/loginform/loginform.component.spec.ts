import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformComponent } from './loginform.component';
import { InputfieldComponent } from 'app/components/atoms/inputfield/inputfield.component';

describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginformComponent, InputfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create inputfield', () => {
    const element: HTMLElement = fixture.nativeElement;
    const inputfield = element.querySelector('app-inputfield');
    expect(inputfield).toBeTruthy();
  }); 
});
