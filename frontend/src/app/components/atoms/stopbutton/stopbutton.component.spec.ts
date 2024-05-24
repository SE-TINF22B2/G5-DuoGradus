import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopbuttonComponent } from './stopbutton.component';

describe('StopbuttonComponent', () => {
  let component: StopbuttonComponent;
  let fixture: ComponentFixture<StopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
