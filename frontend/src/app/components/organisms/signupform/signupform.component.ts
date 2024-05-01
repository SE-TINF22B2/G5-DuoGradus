import { Component } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.scss'
})
export class SignupformComponent {

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
