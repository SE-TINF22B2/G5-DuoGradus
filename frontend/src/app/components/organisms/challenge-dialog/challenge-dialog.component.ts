import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ChallengeButtonComponent } from 'app/components/atoms/challenge-button/challenge-button.component';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrl: './challenge-dialog.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100%',
      
      })),
      state('closed', style({
        height: '0', // Endwert für die Höhe des Dialogs (geschlossen)
  
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ])
    ]),
    trigger('openClose2', [
      state('open', style({
        height: '50vh',
       
      })),
      state('closed', style({
        height: '0', // Endwert für die Höhe des Dialogs (geschlossen)
  
      })),
      transition('open <=> closed', [
        animate('0.4s')
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



  triggerEvent() {
    console.log(this.trigger); 
    this.closeDialog.emit();
    
  }

  
}
