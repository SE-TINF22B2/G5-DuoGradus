import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { EventService } from 'app/services/event.service';


@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrl: './challenge-button.component.scss',
  
})
export class ChallengeButtonComponent {
  @Input() num: number = 1;
  @Input() steps: number = 0;
  @Input() time: number = 0;
  buttonIsclicked: boolean = false;
  
  
  constructor(public eventService:EventService)
  {
      this.eventService = eventService;
  }

  challengeButtonIsClicked() {
    this.buttonIsclicked = true;
    this.eventService.disabled = true;
  }

  closeDialog() {
    this.buttonIsclicked = false;
    this.eventService.disabled = false;
  }
}
