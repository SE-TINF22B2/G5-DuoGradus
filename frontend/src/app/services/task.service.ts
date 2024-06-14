import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';
import { timeInterval } from 'rxjs';

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
        setTimeout(() => {
          this.loaderService.hide();
        }, 500);
        console.error('datas:', data);
        this.taskdata = data;
      },
      (error:any) => {
        console.error('error:', error);
      }
    );;

  }

  beginTask(taskId: string)
  {
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });

    const body = {
      action: 'start'
    };

    this.http.put<any>(`${this.apiUrl}/${taskId}`, body, { headers: headers }).subscribe(
      (data: any) => {
        this.loaderService.hide();
        console.error('task started:', data);
        this.taskdata = data;
      },
      (error: any) => {
        console.error('error task start:', error);
      }
    );

  }




}
