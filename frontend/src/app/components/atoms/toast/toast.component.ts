import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  constructor(public eventservice:EventService) 
  {
      this.eventservice = eventservice;
  }
}
