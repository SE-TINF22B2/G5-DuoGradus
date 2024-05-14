import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsentryComponent } from '../../atoms/settingsentry/settingsentry.component';
import { SettingspageComponent } from './settingspage.component';

describe('SettingspageComponent', () => {
  let component: SettingspageComponent;
  let fixture: ComponentFixture<SettingspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingspageComponent,
                    SettingsentryComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
