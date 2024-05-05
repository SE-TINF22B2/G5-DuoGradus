import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.scss'
})
export class UsercardComponent {
@Input() name: string = "";
@Input() picture: string = "../../../../assets/Standard_Icon.svg";
removeIsPressed: boolean = false;

toggleRemove() 
  {
    this.removeIsPressed = !this.removeIsPressed;

  }

}
