import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router: Router;

  constructor(router:Router){
    this.router=router;
  }
  //called to navigate to a different page
  navigate(path:string){
    this.router.navigateByUrl(path);
  }

  //called to highlight current page
  isOnPage(path:string):boolean{
    return this.router.url==path;
  }
}
