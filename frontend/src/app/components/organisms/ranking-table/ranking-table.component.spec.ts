import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingTableComponent } from './ranking-table.component';
import { UserCardComponent } from 'app/components/atoms/user-card/user-card.component';

describe('RankingTableComponent', () => {
  let component: RankingTableComponent;
  let fixture: ComponentFixture<RankingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingTableComponent, UserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
