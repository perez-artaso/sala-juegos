import { Card } from "./card";
import { CardSuit } from "./card-suit";

export class CardDeck {
    deck: Array<Card> = [];

    constructor(){
        this.populateDeck();
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

    popRandomCard(): Card {
        
        const randomIndex: number = Math.floor(Math.random() * (this.deck.length - 1));
        
        const poppedCard = this.deck[randomIndex];
        
        this.deck = this.deck.slice(0, randomIndex).concat(this.deck.slice(randomIndex+1));

        return poppedCard;

    }

}
