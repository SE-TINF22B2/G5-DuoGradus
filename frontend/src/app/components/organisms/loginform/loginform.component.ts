import { LoaderService } from './../../../services/loader.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EventService } from 'app/services/event.service';

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
  credentials: string = '';
  apiUrl = '/api/user/me';

  constructor( private router: Router, private http: HttpClient, private loaderService: LoaderService) {

    this.router = router;
  }

  toggleType() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
    this.img = this.showPassword
      ? '../../../../assets/icons/ausblenden.png'
      : '../../../../assets/icons/aussicht.png';
  }

  /**
   * Sends a request to the server to login the user
   */
  login()
  {
    console.log(this.username);
    this.createCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.credentials}`
    });
    this.http.get<any>(this.apiUrl, { headers: headers }).subscribe(
      (data: any) => {
        this.loaderService.show();
        localStorage.setItem('credentials', JSON.stringify(this.credentials));
        this.router.navigate(['/main']);
      },
      (error:any) => {
        console.error('error:', error);
      }
    );;

  }

  /**
   * Creates the login information for basic authentication
   */
  createCredentials()
  {
      this.credentials = btoa(`${this.username}:${this.password}`);
  }




}


