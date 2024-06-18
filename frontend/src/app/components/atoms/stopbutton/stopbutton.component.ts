import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-stopbutton',
  templateUrl: './stopbutton.component.html',
  styleUrl: './stopbutton.component.scss',
})
export class StopbuttonComponent {
  constructor(public eventservice: EventService) {
    this.eventservice = eventservice;
  }

  /**
   * Toggles the stop button functionality.
   * Sets the necessary properties and triggers the stopTraining method.
   * Displays a snackbar with a message indicating that the training has stopped.
   */
  toggleStopButton() {
    this.eventservice.toggleStopButton = false;
    this.eventservice.disabled = false;
    this.eventservice.stopTraining();
    this.eventservice.snackbarBackgroundColor = '#f72525';
    this.eventservice.snackbarText = 'Training has stoped';
    this.eventservice.classNameToast = 'show';
    setTimeout(() => {
      this.eventservice.classNameToast = '';
    }, 2800);
  }
}
