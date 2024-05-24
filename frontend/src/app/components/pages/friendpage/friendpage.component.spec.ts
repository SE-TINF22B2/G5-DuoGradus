import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendpageComponent } from './friendpage.component';
import { HeaderComponent } from 'app/components/atoms/header/header.component';
import { SearchbarComponent } from 'app/components/atoms/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { UserfilterPipe } from 'app/pipes/userfilter.pipe';
import { FriendCardComponent } from 'app/components/atoms/friend-card/friend-card.component';

describe('FriendpageComponent', () => {
  let component: FriendpageComponent;
  let fixture: ComponentFixture<FriendpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendpageComponent, HeaderComponent, SearchbarComponent, UserfilterPipe, FriendCardComponent],
      imports: [FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
