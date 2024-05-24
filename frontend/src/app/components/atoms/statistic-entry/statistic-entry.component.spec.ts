import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticEntryComponent } from './statistic-entry.component';

describe('StatisticEntryComponent', () => {
  let component: StatisticEntryComponent;
  let fixture: ComponentFixture<StatisticEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
