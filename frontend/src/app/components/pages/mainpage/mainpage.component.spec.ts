import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageComponent } from './mainpage.component';
import { StatisticHeaderComponent } from 'app/components/organisms/statistic-header/statistic-header.component';
import { LoaderComponent } from 'app/components/atoms/loader/loader.component';
import { RoadmapComponent } from 'app/components/organisms/roadmap/roadmap.component';
import { TimerComponent } from 'app/components/atoms/timer/timer.component';
import { TimerPipe } from 'app/pipes/timer.pipe';
import { ChallengeButtonComponent } from 'app/components/atoms/challenge-button/challenge-button.component';
import { ChallengeDialogComponent } from 'app/components/organisms/challenge-dialog/challenge-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainpageComponent,
        StatisticHeaderComponent,
        LoaderComponent,
        RoadmapComponent,
        TimerComponent,
        TimerPipe,
        ChallengeDialogComponent,
        ChallengeButtonComponent
      ],
      imports: [BrowserAnimationsModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
