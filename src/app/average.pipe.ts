import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
  standalone: true,
  pure: false,
})
export class AveragePipe implements PipeTransform {
  transform(items: Array<any>, attr: string): number | null {
    if (items.length === 0 || !items) {
      return null;
    }
    if (!attr) {
      return null;
    }

    let averageSum = items.reduce((a, b) => a + b[attr], 0);
    return averageSum / items.length;
  }
}
