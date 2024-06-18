import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { MainpageService } from 'app/services/mainpage.service';

@Component({
  selector: 'app-statistic-header',
  templateUrl: './statistic-header.component.html',
  styleUrl: './statistic-header.component.scss',
})
export class StatisticHeaderComponent {
  constructor(
    public eventservice: EventService,
    public mainpageservice: MainpageService,
  ) {
    this.eventservice = eventservice;
  }

  /**
   * Initializes the component.
   * This lifecycle hook is called after Angular has initialized all data-bound properties of a directive.
   *
   */
  ngOnInit(): void {
    this.mainpageservice.getStreak();
  }
}
