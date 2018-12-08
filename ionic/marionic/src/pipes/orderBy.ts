import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    return array.sort((a,b) => { return a[property] > b[property]? 1: -1;});
  }
}