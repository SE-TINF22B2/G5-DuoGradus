import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})

export class LandingpageComponent {

  constructor(private router: Router) {
    this.router = router;
  }

  /**
   * Navigates to the login page.
   */
  login() {
    this.router.navigate(['/auth/login']);
  }

  /**
   * Navigates to the signup page.
   */
  signup() {
    this.router.navigate(['/auth/signup']);
  }
}
