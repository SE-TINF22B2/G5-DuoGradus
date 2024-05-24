import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent {
  //Default values for showcase 
  users: any[] = [
    { name: 'Susi', placement: 1, winstreak: 43 },
    { name: 'Max', placement: 2, winstreak: 38 },
    { name: 'Thomas', placement: 3, winstreak: 26 },
    { name: 'xxDaKillaHD', placement: 4, winstreak: 18 },
    { name: 'Sirius', placement: 5, winstreak: 17 },
    { name: 'Maya', placement: 6, winstreak: 11 },
    { name: 'Leon', placement: 7, winstreak: 3 }
  ];
}