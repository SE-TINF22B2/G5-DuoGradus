import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  hasFooter() {
    const footerPages: string[] = ['/main', '/ranking'];
    return footerPages.includes(window.location.pathname);
  }
}
