import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  disabled: boolean = false;
  toggleStopButton: boolean = false;
  time: number = 0;
  steps: string = "0";
  interval: any;
  classNameToast: string = '';
  snackbarBackgroundColor: string = '';
  snackbarText: string = '';
  query: string = '';


  reduceTimer() {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.interval);
        console.log('Zeit abgelaufen!');
      }
    }, 1000);
  }

  stopTraining() {
    clearInterval(this.interval);
    this.steps = "0";
    this.time = 0;
  }

}
