import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsentryComponent } from './settingsentry.component';

describe('SettingsentryComponent', () => {
  let component: SettingsentryComponent;
  let fixture: ComponentFixture<SettingsentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsentryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
