import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss',
})
export class LoginformComponent {
  passwordFieldType: string = 'password';
  img: string = '../../../assets/ausblenden.png';
  showPassword: boolean = false;

  toggleType() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
    this.img = this.showPassword
      ? '../../../assets/ausblenden.png'
      : '../../../assets/aussicht.png';
  }
}
