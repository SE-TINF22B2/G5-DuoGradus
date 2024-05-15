import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  @Input() name: string = "";
  @Output() closeRemoveDialog = new EventEmitter<void>();
  
  cancelRemove()
  {
    this.closeRemoveDialog.emit();
  }
}
