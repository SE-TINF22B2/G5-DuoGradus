import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-transition-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})

/**
 * The root component of the application.
 * Responsible for displaying the main layout and handling loading state.
 */
export class AppComponent implements OnInit {
  title =
    'duogradus. | Sammle Schritte, Tritt gegen Freunde an und steig in der Liga auf';
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  /**
   * Prepares the route for animation.
   * @param outlet - The router outlet.
   * @returns The animation data for the activated route.
   */
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  /**
   * Checks if the current page should have a footer.
   * @returns True if the current page should have a footer, false otherwise.
   */
  hasFooter() {
    const footerPages: string[] = ['/main', '/ranking', '/profile', '/friends'];
    return footerPages.includes(window.location.pathname);
  }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }
}
