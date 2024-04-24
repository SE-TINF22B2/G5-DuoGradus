import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  disabled: boolean = false;
  
  constructor() {}
}
