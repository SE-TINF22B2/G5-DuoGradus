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
    { name: 'Leon', placement: 7, winstreak: 3 },
    { name: 'Luna', placement: 8, winstreak: 2 },
    { name: 'Kira', placement: 9, winstreak: 1 },
    { name: 'Luna', placement: 10, winstreak: 0 },
    { name: 'Kira', placement: 11, winstreak: 0 },
    { name: 'Luna', placement: 12, winstreak: 0 },
    { name: 'Kira', placement: 13, winstreak: 0 },
    { name: 'Luna', placement: 14, winstreak: 0 },
    { name: 'Kira', placement: 15, winstreak: 0 },
    { name: 'Luna', placement: 16, winstreak: 0 },
    { name: 'Kira', placement: 17, winstreak: 0 },
    { name: 'Luna', placement: 18, winstreak: 0 },
    { name: 'Kira', placement: 19, winstreak: 0 },
    { name: 'Luna', placement: 20, winstreak: 0 },
  ];
}
