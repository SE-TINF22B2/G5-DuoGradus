import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ChallengeButtonComponent } from 'app/components/atoms/challenge-button/challenge-button.component';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrl: './challenge-dialog.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '45vh',
       
      })),
      state('closed', style({
        height: '0', 
  
      })),
      transition('open <=> closed', [
        animate('0.1s')
      ])
    ])
  ]
})
export class ChallengeDialogComponent {
  @Input() num: number = 1;
  @Input() steps: number = 0;
  @Input() time: number = 0;
  @Input() points: number = 0;
  @Output() closeDialog = new EventEmitter<void>();
  @Input() trigger: boolean = false; 


  constructor(public eventservice:EventService) 
  {
      this.eventservice = eventservice;
  }

  triggerEvent() {
    this.closeDialog.emit();
    this.eventservice.steps = this.steps; 

  }

  

  
}
