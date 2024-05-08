import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    if (!value || isNaN(value)) {
      return '00:00:00';
    }

    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    const seconds: number = Math.floor(value % 60);

    const hoursString: string = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesString: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString: string = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return hoursString + ':' + minutesString + ':' + secondsString;
  }
}