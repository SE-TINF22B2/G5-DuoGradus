import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  apiUrlTask = '/api/task';
  apiUrlStreak = '/api/user/me/streak';
  taskdata: any;
  streak: any;

  constructor( private router: Router, private http: HttpClient, private loaderService: LoaderService, public authService: AuthService) {

    this.router = router;
  }

  /**
   * Returns all available tasks
   */
  getListOfAllTasks()
  {
    this.loaderService.show();
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });
    this.http.get<any>(this.apiUrlTask, { headers: headers }).subscribe(
      (data: any) => {
        this.loaderService.hide();
        console.error('datas:', data);
        this.taskdata = data;
      },
      (error:any) => {
        console.error('error:', error);
      }
    );

  }

  /**
   * starts a task
   * @param taskId
   */

  beginAndStopTask(taskId: string)
  {
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });

    const body = {
      action: 'start'
    };

    this.http.put<any>(`${this.apiUrlTask}/${taskId}`, body, { headers: headers }).subscribe(
      (data: any) => {
        console.error('task started:', data);
        this.taskdata = data;
      },
      (error: any) => {
        console.error('error task start:', error);
      }
    );

  }

  /**
   * get the current Streak of the user
   */
  getStreak()
  {
    const credentials = this.authService.getCredentials();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${credentials}`
    });
    this.http.get<any>(this.apiUrlStreak, { headers: headers }).subscribe(
      (data: any) => {
        console.error('datas:', data);
        this.streak = data;
      },
      (error:any) => {
        console.error('error:', error);
      }
    );
  }




}
