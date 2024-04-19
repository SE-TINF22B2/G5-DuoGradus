import { Component, Input } from '@angular/core';
import { EventService } from 'app/services/event.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrl: './challenge-button.component.scss',
})
export class ChallengeButtonComponent {
  @Input() num: number = 1;
  @Input() steps: number = 0;
  @Input() time: number = 0;
  disabled: boolean = false;
  buttonIsclicked: boolean = false;

  constructor(public eventService: EventService) {
    this.eventService = eventService;
  }

  challengeButtonIsClicked() {
    this.buttonIsclicked = true;
  }

  closeDialog() {
    this.buttonIsclicked = false;
  }
}
