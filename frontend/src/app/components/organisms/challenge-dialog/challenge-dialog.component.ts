import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { EventService } from 'app/services/event.service';
import { MainpageService } from 'app/services/mainpage.service';

@Component({
  selector: 'app-challenge-dialog',
  templateUrl: './challenge-dialog.component.html',
  styleUrl: './challenge-dialog.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '45vh',

      })),
      state('closed', style({
        height: '0',

      })),
      transition('open <=> closed', [
        animate('0.1s')
      ])
    ])
  ]
})
export class ChallengeDialogComponent {
  @Input() num: number = 1;
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Output() closeDialog = new EventEmitter<void>();
  @Input() trigger: boolean = false;


  constructor(public eventservice:EventService, public mainpageService: MainpageService)
  {
      this.eventservice = eventservice;
  }

  triggerEvent() {
    this.closeDialog.emit();
  }

  startEvent()
  {
    this.mainpageService.beginAndStopTask(this.id);
    this.closeDialog.emit();
    this.eventservice.steps = this.extractNumberFromSentence(this.description);
    this.eventservice.disabled = true;
    //this.eventservice.reduceTimer();
    this.eventservice.toggleStopButton = true;
    this.eventservice.snackbarText = "Training has started"
    this.eventservice.snackbarBackgroundColor = "#04b02f"
    this.eventservice.classNameToast = "show"
    setTimeout(
      () =>
        {
          this.eventservice.classNameToast = "";
        }
      , 2900);

  }

  /**
   * Extracts number from sentence
   * @param sentence
   * @returns excracted number from sentence
   */

  extractNumberFromSentence(sentence: string): string  {
    const regex = /\b\d{1,3}(\.\d{3})*\b/g;
  const match = sentence.match(regex);

  if (match) {
    const numberStringWithDots = match[0];
    const numberString = numberStringWithDots.replace(/\./g, '');
    return numberString;
  } else {
    return "0";
  }
    }






}
