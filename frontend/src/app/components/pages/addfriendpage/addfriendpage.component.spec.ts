import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfriendpageComponent } from './addfriendpage.component';
import { HeaderComponent } from 'app/components/atoms/header/header.component';
import { SearchbarComponent } from 'app/components/atoms/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

describe('AddfriendpageComponent', () => {
  let component: AddfriendpageComponent;
  let fixture: ComponentFixture<AddfriendpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddfriendpageComponent, HeaderComponent, SearchbarComponent],
      imports: [FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddfriendpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
