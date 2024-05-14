import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrl: './settingspage.component.scss'
})
export class SettingspageComponent {

  @Input() settings =[{name:'Name', value:'David Hasselhoff'},
                      {name:'Email',value:'david.hasselhoff@duo-gradus.de'}];

  constructor(private router: Router) { 
  }

  goBack() {
    this.router.navigate(['/profile']);
  }

  logout() {
    localStorage.removeItem('bearerToken');
    this.router.navigate(['/home']);
  }
}
