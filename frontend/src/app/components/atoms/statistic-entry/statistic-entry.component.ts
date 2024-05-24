import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-statistic-entry',
  templateUrl: './statistic-entry.component.html',
  styleUrl: './statistic-entry.component.scss'
})
export class StatisticEntryComponent {
  @Input() name:string = 'Distanz gelaufen';
  @Input() value:string = '12.3 km';
}
