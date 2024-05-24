import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticHeaderComponent } from './statistic-header.component';
import { TimerComponent } from 'app/components/atoms/timer/timer.component';
import { TimerPipe } from 'app/pipes/timer.pipe';

describe('StatisticHeaderComponent', () => {
  let component: StatisticHeaderComponent;
  let fixture: ComponentFixture<StatisticHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticHeaderComponent, TimerComponent, TimerPipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
