import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageComponent } from './profilepage.component';
import { StatisticEntryComponent } from '../../atoms/statistic-entry/statistic-entry.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('ProfilepageComponent', () => {
  let component: ProfilepageComponent;
  let fixture: ComponentFixture<ProfilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilepageComponent,
                    StatisticEntryComponent
      ],
      imports: [RouterModule.forRoot([])],
      providers: [HttpClient, HttpHandler]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
