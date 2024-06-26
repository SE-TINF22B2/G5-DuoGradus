import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  constructor(public eventService: EventService) {
    this.eventService = eventService;
  }
}
