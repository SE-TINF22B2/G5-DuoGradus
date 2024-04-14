import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeButtonComponent } from './challenge-button.component';

describe('ChallengeButtonComponent', () => {
  let component: ChallengeButtonComponent;
  let fixture: ComponentFixture<ChallengeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
