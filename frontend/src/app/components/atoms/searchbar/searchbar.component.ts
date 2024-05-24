import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from 'app/services/event.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  /**
   * @constructor
   * @param eventService Service that handles the events between components
   */

  constructor(public eventService: EventService) {
    this.eventService = eventService;
   }
}
