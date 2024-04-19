import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrl: './challenge-dialog.component.scss',
})
export class ChallengeDialogComponent {
  @Input() num: number = 1;
  @Input() steps: number = 0;
  @Input() time: number = 0;
  @Input() points: number = 0;
  @Output() closeDialog = new EventEmitter<void>();

  triggerEvent() {
    this.closeDialog.emit();
  }
}
