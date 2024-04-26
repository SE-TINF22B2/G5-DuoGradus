import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-statistic-header',
  templateUrl: './statistic-header.component.html',
  styleUrl: './statistic-header.component.scss'
})
export class StatisticHeaderComponent {

  constructor(public eventservice:EventService )
  {
      this.eventservice = eventservice;
  }

}
