import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrl: './deletedialog.component.scss'
})
export class DeletedialogComponent {
@Input() name: string = "";
@Output() closeRemoveDialog = new EventEmitter<void>();

cancelRemove()
{
  this.closeRemoveDialog.emit();
}

}
