import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrl: './challenge-button.component.scss',
})
export class ChallengeButtonComponent {
  @Input() num: number = 1;
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Output() toggleStopButton = new EventEmitter<void>();
  buttonIsclicked: boolean = false;

  constructor(public eventService: EventService) {
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
