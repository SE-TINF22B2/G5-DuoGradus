import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticHeaderComponent } from './statistic-header.component';

describe('StatisticHeaderComponent', () => {
  let component: StatisticHeaderComponent;
  let fixture: ComponentFixture<StatisticHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticHeaderComponent]
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
