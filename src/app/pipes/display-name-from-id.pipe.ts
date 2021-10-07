import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayNameFromId'
})
export class DisplayNameFromIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
