import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';
import { LoaderService } from 'app/services/loader.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "/api/user/me";
  userdata: any;

  constructor( private router: Router, private http: HttpClient, private loaderService: LoaderService, public authService: AuthService) {
    this.router = router;
  }

  /**
   * Returns all information about the user
   */
  getUserInformations()
  {
    this.loaderService.show();
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });
    this.http.get<any>(this.apiUrl, { headers: headers }).subscribe(
      (data: any) => {
        this.loaderService.hide();
        console.error('datas:', data);
        this.userdata = data;
      },
      (error:any) => {
        console.error('error:', error);
      }
    );

  }

}
