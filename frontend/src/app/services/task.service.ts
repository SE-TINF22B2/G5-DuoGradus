import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = '/api/task';
  taskdata: any;

  constructor( private router: Router, private http: HttpClient, private loaderService: LoaderService, public authService: AuthService) {

    this.router = router;
  }

  /**
   * Returns all available tasks
   */
  getListOfAllTasks()
  {
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });
    this.http.get<any>(this.apiUrl, { headers: headers }).subscribe(
      (data: any) => {
        this.loaderService.show();
        console.error('datas:', data);
        this.taskdata = data;
      },
      (error:any) => {
        console.error('error:', error);
      }
    );;

  }




}
