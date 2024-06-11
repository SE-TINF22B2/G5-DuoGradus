import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPageComponent } from './ranking-page.component';
import { RankingTableComponent } from 'app/components/organisms/ranking-table/ranking-table.component';
import { UserCardComponent } from 'app/components/atoms/user-card/user-card.component';
import { HeaderComponent } from 'app/components/atoms/header/header.component';

describe('RankingPageComponent', () => {
  let component: RankingPageComponent;
  let fixture: ComponentFixture<RankingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingPageComponent, RankingTableComponent, UserCardComponent, HeaderComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept input for users', () => {
    const users = [{ name: 'User 1', placement: 1, winstreak: 5 }];
    component.users = users;
    expect(component.users).toBe(users);
  });
});
