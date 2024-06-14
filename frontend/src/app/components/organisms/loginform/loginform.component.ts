import { Component, Input } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  passwordFieldType: string = 'password';
  img: string = '';
  password: string = '';
  username: string = '';
  showPassword: boolean = false;

  constructor(public authService: AuthService) {
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
    this.authService.loginUser(this.username, this.password);
  }






}


