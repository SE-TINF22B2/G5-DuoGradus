import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapComponent } from './roadmap.component';
import { ChallengeButtonComponent } from 'app/components/atoms/challenge-button/challenge-button.component';
import { ChallengeDialogComponent } from '../challenge-dialog/challenge-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RoadmapComponent', () => {
  let component: RoadmapComponent;
  let fixture: ComponentFixture<RoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoadmapComponent, ChallengeButtonComponent, ChallengeDialogComponent],
      imports: [BrowserAnimationsModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
