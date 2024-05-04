import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardComponent } from './usercard.component';

describe('UsercardComponent', () => {
  let component: UsercardComponent;
  let fixture: ComponentFixture<UsercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsercardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
