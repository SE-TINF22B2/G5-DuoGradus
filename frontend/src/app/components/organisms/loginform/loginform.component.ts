import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  passwordFieldType: string = 'password';
  img: string = '';
  showPassword: boolean = false;

  constructor( private router: Router) {

    this.router = router;
  }

  toggleType() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
    this.img = this.showPassword
      ? '../../../../assets/icons/ausblenden.png'
      : '../../../../assets/icons/aussicht.png';
  }

  login()
  {
    this.router.navigate(['/main']);
  }

}
