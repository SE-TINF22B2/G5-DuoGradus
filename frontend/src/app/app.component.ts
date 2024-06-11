import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation} from './route-transition-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit{
  title = 'duogradus. | Sammle Schritte, Tritt gegen Freunde an und steig in der Liga auf';
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {

  }

  prepareRoute(outlet: RouterOutlet) {
    console
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

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

