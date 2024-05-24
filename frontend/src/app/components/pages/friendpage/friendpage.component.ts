import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendpage',
  templateUrl: './friendpage.component.html',
  styleUrl: './friendpage.component.scss',
})
export class FriendpageComponent {
  constructor(public eventService: EventService, private router: Router) {
    this.eventService = eventService;
    this.router = router;
  }

  users = [
    { id: 3, name: 'Alice Smith' },
    { id: 4, name: 'Bob Johnson' },
    { id: 5, name: 'Emma Brown' },
    { id: 6, name: 'Michael Wilson' },
    { id: 7, name: 'Olivia Davis' },
    { id: 8, name: 'James Taylor' },
    { id: 9, name: 'Sophia Martinez' },
    { id: 10, name: 'William Anderson' },
    { id: 11, name: 'Emily Thomas' },
    { id: 12, name: 'Alexander Garcia' },
  ];

  addFriend() {
    console.log('add friend');
    this.router.navigate(['/addfriend']);
  }
}