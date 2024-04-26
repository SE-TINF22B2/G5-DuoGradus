import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent {

  constructor(public eventservice:EventService) 
  {
      this.eventservice = eventservice;
  }



  activityList = [
    { steps: 500, time: 10 },
    { steps: 1000, time: 2000 },
    { steps: 1500, time: 3000 },
    { steps: 2000, time: 4000 },
    { steps: 2500, time: 5000 },
    { steps: 3000, time: 6000 },
    { steps: 3500, time: 7000 },
    { steps: 4000, time: 8000 },
    { steps: 4500, time: 9000 },
    { steps: 5000, time: 10000 },
    { steps: 5500, time: 11000 },
    { steps: 6000, time: 12000 },
    { steps: 6500, time: 13000 },
    { steps: 7000, time: 14000 },
    { steps: 7500, time: 15000 },
    { steps: 8000, time: 16000 },
  ];
}
