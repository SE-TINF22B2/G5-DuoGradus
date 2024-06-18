import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss',
})
export class FriendCardComponent {
  @Input() name: string = '';
  @Input() picture: string = '../../../../assets/icons/001-sportler.png';
  removeIsPressed: boolean = false;

  /**
   * Toggles the state of the `removeIsPressed` property.
   */
  toggleRemove() {
    this.removeIsPressed = !this.removeIsPressed;
  }
}
