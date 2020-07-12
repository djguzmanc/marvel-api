import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncates a large text
 */
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // tslint:disable-next-line: completed-docs
  transform(value: string, maxChar: number): string {
    if (value) {
      return `${value.slice(0, maxChar)}...`;
    }
    return value;
  }

}
