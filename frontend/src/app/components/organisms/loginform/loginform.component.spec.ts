import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformComponent } from './loginform.component';
import { InputfieldComponent } from 'app/components/atoms/inputfield/inputfield.component';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginformComponent, InputfieldComponent],
      providers: [HttpClient, HttpHandler],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
