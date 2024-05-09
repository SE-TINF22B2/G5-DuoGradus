import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() placement: number = 0;
  @Input() name: string = "default";
  @Input() winstreak: number = 0;
}