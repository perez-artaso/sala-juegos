export class Card {
    private number: number;
    private suit: string;

    constructor (number: number, suit: string) {
        this.number = number;
        this.suit = suit;
    }

    isHigherThan (otherCard: Card): boolean {
        return this.number > otherCard.number; 
    }

    sameSuitThan (otherCard: Card): boolean {
        return this.suit === otherCard.suit;
    }

    getNumber () {
        return this.number;
    }

    getSuit () {
        return this.suit;
    }
}