import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { MainpageService } from 'app/services/mainpage.service';
@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent implements OnInit {
  constructor(
    public eventservice: EventService,
    public mainpageservice: MainpageService,
  ) {
    this.eventservice = eventservice;
  }
  /**
   * Initializes the component.
   * This method is called after the component has been created and initialized.
   */
  ngOnInit(): void {
    this.mainpageservice.getListOfAllTasks();
  }
}
