import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.scss',
})
export class InputfieldComponent {
  /**
   * Represents the type of the input field.
  */
  @Input() typetext: string = '';
  /**
   * Represents the value of the input field.
  */
  @Input() placeholder: string = '';
  /**
   * Represents the label of the input field.
  */
  @Input() labeltext: string = '';
}
