import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bpmToMs'
})
export class BpmToMsPipe implements PipeTransform 
{
  transform(value: number): number 
  {
    let milliseconds = (60000 / value) / 1000

    return milliseconds;
  }
}