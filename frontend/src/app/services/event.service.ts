import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  disabled: boolean = false;
  time: number = 0; 
  steps: number = 0; 
  
  constructor() {

    
  }
}
