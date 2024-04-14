import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-challenge-button',
  templateUrl: './challenge-button.component.html',
  styleUrl: './challenge-button.component.scss'
})
export class ChallengeButtonComponent {
  @Input() num:number = 1; 
}
