import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteHour',
  standalone: true
})
export class MinuteHourPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return '';
    }
    
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h ${Math.floor(minutes)}m`;
  }

}
