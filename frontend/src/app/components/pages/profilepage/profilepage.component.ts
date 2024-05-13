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

  router:Router;
  constructor(router: Router) {
    this.router = router;
  }

  settings(){
    this.router.navigate(['/settings']);
  }
}
