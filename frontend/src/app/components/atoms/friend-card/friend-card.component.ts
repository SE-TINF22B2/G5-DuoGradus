import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.scss',
})
/**
 * Represents a friend card component.
 */
export class FriendCardComponent {

  /**
   * The name of the friend.
   */
  @Input() name: string = '';

  /**
   * The picture of the friend.
   */
  @Input() picture: string = '../../../../assets/icons/avatar.svg';

  /**
   * Indicates whether the remove button is pressed or not.
   */
  removeIsPressed: boolean = false;

  /**
   * Toggles the state of the remove button.
   */
  toggleRemove() {
    this.removeIsPressed = !this.removeIsPressed;
  }
}
