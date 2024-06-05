import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrl: './settingspage.component.scss'
})
export class SettingspageComponent {

  //dynamic settings array with fake data for showcase
  @Input() settings =[{name:'Name', value:'David Hasselhoff'},
                      {name:'Email',value:'david.hasselhoff@duo-gradus.de'}];

  constructor(private router: Router) { 
  }

  //gets called on page close
  goBack() {
    this.router.navigate(['/profile']);
  }

  //gets called when the user clicks the logout button
  logout() {
    localStorage.removeItem('bearerToken');
    this.router.navigate(['/home']);
  }
}
