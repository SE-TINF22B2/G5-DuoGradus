import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldComponent } from './inputfield.component';

describe('InputfieldComponent', () => {
  let component: InputfieldComponent;
  let fixture: ComponentFixture<InputfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
