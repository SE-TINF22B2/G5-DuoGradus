import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  disabled: boolean = false;
  toggleStopButton: boolean = false;
  time: number = 0;
  steps: number = 0;
  interval: any;
  classNameToast: string = '';
  snackbarBackgroundColor: string = '';
  snackbarText: string = '';
  query: string = '';


  reduceTimer() {
    this.interval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.interval);
        console.log('Zeit abgelaufen!');
      }
    }, 1000);
  }

  stopTraining() {
    clearInterval(this.interval);
    this.steps = 0;
    this.time = 0;
  }

  private apiUrl = '/api/user/me';
  private username2 = 'max@example.org'; // Ersetze dies durch deinen tatsächlichen Benutzernamen
  private password2 = '1234'; // Ersetze dies durch dein tatsächliches Passwort
  private credentials = btoa(`${this.username2}:${this.password2}`); // Base64-Encoding der Anmeldedaten

  constructor(private http: HttpClient) { }

  testHttpRequest() {
    console.log('Teste HTTP-Request');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.credentials}` // Füge den Authorization-Header für Basic Auth hinzu
    });

    return  this.http.get<any>(this.apiUrl, { headers: headers });
  }
}
