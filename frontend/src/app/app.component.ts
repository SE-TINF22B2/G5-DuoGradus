import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'duogradus. | Sammle Schritte, Tritt gegen Freunde an und steig in der Liga auf';
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {

  }
  
    hasFooter() {
    const footerPages: string[] = ['/main', '/ranking'];
    return footerPages.includes(window.location.pathname);
    }

  ngOnInit(): void {
     this.loaderService.isLoading.subscribe((value) => {
      this.isLoading = value;
    });

  }

}

