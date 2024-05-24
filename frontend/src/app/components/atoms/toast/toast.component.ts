import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  /**
   * @constructor
   * @param eventService Service that handles the events between components
   */
  constructor(public eventservice:EventService)
  {
      this.eventservice = eventservice;
  }
}
