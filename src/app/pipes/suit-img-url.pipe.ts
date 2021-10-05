import { Pipe, PipeTransform } from '@angular/core';
import { CardSuit } from '../models/card-suit';

@Pipe({
  name: 'suitImgUrl'
})
export class SuitImgUrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    switch (value) {
      
      case 'hearts':
        return 'assets/images/heart.png';

      case 'clubs':
        return 'assets/images/clover.png';

      case 'spades':
        return 'assets/images/spade.png';

      case 'diamonds':
        return 'assets/images/diamond.png';

      default:
        return 'assets/images/heart.png'

    }

  }

}
