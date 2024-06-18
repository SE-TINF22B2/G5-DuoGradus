import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settingspage',
  templateUrl: './settingspage.component.html',
  styleUrl: './settingspage.component.scss',
})
/**
 * Represents the settings page component.
 */
export class SettingspageComponent {
  @Input() settings = [
    { name: 'name', value: 'David Hasselhoff' },
    { name: 'email', value: 'david.hasselhoff@duo-gradus.de' },
  ];

  constructor(private router: Router) {}

  /**
   * Navigates back to the profile page.
   */
  goBack() {
    this.router.navigate(['/profile']);
  }

  /**
   * Logs out the user and navigates to the home page.
   */
  logout() {
    localStorage.removeItem('credentials');
    this.router.navigate(['/home']);
  }
}
