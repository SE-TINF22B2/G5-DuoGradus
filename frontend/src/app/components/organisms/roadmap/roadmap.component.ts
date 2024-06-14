import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { TaskService } from 'app/services/task.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss',
})
export class RoadmapComponent implements OnInit{

  constructor(public eventservice:EventService, public taskservice: TaskService)
  {
      this.eventservice = eventservice;
  }
  ngOnInit(): void {
    this.taskservice.getListOfAllTasks();
  }

}
