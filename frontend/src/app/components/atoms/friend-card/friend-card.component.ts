
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss'
})
export class FriendCardComponent{
  @Input() name: string = "";
  @Input() picture: string = "../../../../assets/icons/avatar.svg";
  removeIsPressed: boolean = false;
  
  toggleRemove() 
    {
      this.removeIsPressed = !this.removeIsPressed;
  
    }
}