import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfriendpage',
  templateUrl: './addfriendpage.component.html',
  styleUrl: './addfriendpage.component.scss',
})
export class AddfriendpageComponent {
  constructor(private router: Router) {
    this.router = router;
  }

  /**
   * Navigates back to the friends page.
   */
  returnToFriends() {
    this.router.navigate(['/friends']);
  }
}
