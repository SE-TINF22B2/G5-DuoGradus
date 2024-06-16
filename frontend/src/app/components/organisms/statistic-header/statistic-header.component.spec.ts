import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StatisticHeaderComponent } from './statistic-header.component';
import { MainpageService } from 'app/services/mainpage.service';
import { TimerComponent } from 'app/components/atoms/timer/timer.component';
import { TimerPipe } from 'app/pipes/timer.pipe';



describe('StatisticHeaderComponent', () => {
  let component: StatisticHeaderComponent;
  let fixture: ComponentFixture<StatisticHeaderComponent>;
  let httpTestingController: HttpTestingController;
  let mainpageService: MainpageService;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      declarations: [StatisticHeaderComponent, TimerComponent, TimerPipe],
      imports: [HttpClientTestingModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticHeaderComponent);
    component = fixture.componentInstance;
    mainpageService = TestBed.inject(MainpageService);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


});
