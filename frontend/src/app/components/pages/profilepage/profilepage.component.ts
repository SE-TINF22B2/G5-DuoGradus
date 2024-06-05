import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent {
  //input with default values for showcase
  //statistics is dynamic array
  name: string = "David Hasselhoff";
  email: string = "david.hasselhoff@duo-gradus.de";
  statistics: {name: string, value: string}[] = [
    {name: 'Distanz gelaufen', value: '12.3 km'},
    {name: 'Zeit aktiv', value: '2:34:56'},
    {name: 'Kalorien verbrannt', value: '1234 kcal'},
    {name: 'Schritte', value: '12345'},
  ];

  router:Router;
  constructor(router: Router) {
    this.router = router;
  }

  //gets called to open settings
  settings(){
    this.router.navigate(['/settings']);
  }
}
