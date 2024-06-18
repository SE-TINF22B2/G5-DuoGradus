import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  /**
   * Transforms a number value representing seconds into a string formatted as 'HH:MM:SS'.
   * If the value is not a number or is NaN, it returns '00:00:00'.
   *
   * @param value - The number value representing seconds.
   * @returns The formatted string in the format 'HH:MM:SS'.
   */
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
