import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrl: './inputfield.component.scss',
})
export class InputfieldComponent {
  @Input() typetext: string = 'Hallo';
  @Input() placeholder: string = '';
  @Input() labeltext: string = '';
  @Input() nameOfNgModel: string = '';







}
