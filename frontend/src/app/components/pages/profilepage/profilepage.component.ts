import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent {
  name: string = "David Hasselhoff";
  email: string = "david.hasselhoff@duo-gradus.de";
  statistics: {name: string, value: string}[] = [
    {name: 'Distance run', value: '12.3 km'},
    {name: 'Time active', value: '2:34:56'},
    {name: 'Calories burned', value: '1234 kcal'},
    {name: 'Steps', value: '12345'},
  ];

  router:Router;
  constructor(router: Router) {
    this.router = router;
  }

  settings(){
    this.router.navigate(['/settings']);
  }
}
