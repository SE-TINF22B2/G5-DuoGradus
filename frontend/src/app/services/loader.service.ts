/**
 * This service is usend to show and hide the loading page 
 */


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  /**
   * Hands over the current state of the loading page
   */
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor() {}

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
