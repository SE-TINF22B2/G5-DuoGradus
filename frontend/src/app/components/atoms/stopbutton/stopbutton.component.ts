import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-stopbutton',
  templateUrl: './stopbutton.component.html',
  styleUrl: './stopbutton.component.scss',
})
export class StopbuttonComponent {
  /**
   * @constructor
   * @param eventService Service that handles the events between components
   */
  constructor(public eventservice: EventService) {
    this.eventservice = eventservice;
  }
  /**
   * Stops the training and shows a snackbar
   */
  toggleStopButton() {
    this.eventservice.toggleStopButton = false;
    this.eventservice.disabled = false;
    this.eventservice.stopTraining();
    this.eventservice.snackbarBackgroundColor = "#f72525" // change the color of the snackbar red
    this.eventservice.snackbarText = "Training has stoped"  //change the displayed text
    this.eventservice.classNameToast = 'show';  // show the snackbar
    // hide the snackbar after 2.8 seconds
    setTimeout(() => {
      this.eventservice.classNameToast = '';
    }, 2800);
  }
}
