import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
/**
 * Represents the footer component of the application.
 */
export class FooterComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  /**
   * Navigates to the specified path.
   * @param path - The path to navigate to.
   */
  navigate(path: string): void {
    this.router.navigateByUrl(path);
  }

  /**
   * Checks if the current page is the specified path.
   * @param path - The path to check against.
   * @returns A boolean indicating if the current page is the specified path.
   */
  isOnPage(path: string): boolean {
    return this.router.url == path;
  }
}
