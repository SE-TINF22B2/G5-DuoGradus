import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrl: './ranking-table.component.scss'
})
export class RankingTableComponent {
  @Input() users: any[] = [
  ];
}