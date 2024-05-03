import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendpageComponent } from './friendpage.component';

describe('FriendpageComponent', () => {
  let component: FriendpageComponent;
  let fixture: ComponentFixture<FriendpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendpageComponent]
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
