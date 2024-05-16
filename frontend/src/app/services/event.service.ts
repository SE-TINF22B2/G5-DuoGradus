/**
 * This service is mainly used to communicate between components
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  disabled: boolean = false;
  toggleStopButton: boolean = false;
  time: number = 0;
  steps: number = 0;
  interval: any;
  classNameToast: string = '';
  snackbarBackgroundColor: string = '';
  snackbarText: string = '';
  query: string = '';

  /** 
  * This function reduce the timer by 1 seconds until it reaches 0
  */

  reduceTimer() {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.interval);
        console.log('Zeit abgelaufen!');
        this.stopTraining(); 
      }
    }, 1000);
  }

/**
 * Stops the Timer and resets the steps and time by the default values
 */

  stopTraining() {
    clearInterval(this.interval);
    this.steps = 0;
    this.time = 0;
  }
}
