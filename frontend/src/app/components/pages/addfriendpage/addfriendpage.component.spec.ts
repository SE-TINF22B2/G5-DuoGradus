import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfriendpageComponent } from './addfriendpage.component';

describe('AddfriendpageComponent', () => {
  let component: AddfriendpageComponent;
  let fixture: ComponentFixture<AddfriendpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddfriendpageComponent]
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
