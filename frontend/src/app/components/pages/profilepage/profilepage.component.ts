import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss',
})
/**
 * Represents the profile page component.
 * This component displays the user's profile information and statistics.
 */
export class ProfilepageComponent implements OnInit {
  name: string = '';
  email: string = '';

  /**
   * Represents the statistics for a user's profile.
   * Each statistic has a name and a corresponding value.
   */
  statistics: { name: string; value: string }[] = [
    { name: 'Distance run', value: '0 km' },
    { name: 'Time active', value: '00:00:00' },
    { name: 'Calories burned', value: '0 kcal' },
    { name: 'Steps', value: '0' },
  ];

  router: Router;

  constructor(
    router: Router,
    public userService: UserService,
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.userService.getUserInformations();
  }

  /**
   * Navigates to the settings page.
   */
  settings() {
    this.router.navigate(['/settings']);
  }
}
