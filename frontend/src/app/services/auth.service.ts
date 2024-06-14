import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = '/api/user/me';
  credentials: string = '';

  constructor( private router: Router, private http: HttpClient, private loaderService: LoaderService) {

    this.router = router;
  }

  /**
   * Sends a request to the server to login the user
   */
  loginUser(username: string, password: string)
  {
    console.log(username);
    console.log(password);
    this.createCredentials(username, password);
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
  createCredentials(username: string, password: string)
  {
      this.credentials = btoa(`${username}:${password}`);
  }
}
