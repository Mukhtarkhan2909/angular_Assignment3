import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  // @ts-ignore
  transform(value: number, currency: string): number {
    if (!isNaN(value)) {
      if (currency === 'kzt') {
        return value * 419.815281;
      } else if (currency === 'rub') {
        return value * 74.3494424;
      }
    }
  }

}
