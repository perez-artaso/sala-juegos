import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardSuit } from 'src/app/models/card-suit';

@Component({
  selector: 'card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {

  deck: Array<Card> = [];

  constructor() { }

  ngOnInit(): void {
    this.populateDeck()
  }

  private populateDeck () {
    
    for(let suit in CardSuit) {
      for (let i = 1; i < 13; i++) {

        this.deck.push(
          new Card (
            i,
            suit
          )
        )

      }
    }
    
  }

  createCard(number: number, suit: string) {
    return new Card(number, suit);
  }

}
