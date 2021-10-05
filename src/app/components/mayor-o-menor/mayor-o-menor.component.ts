import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardDeck } from 'src/app/models/card-deck';

@Component({
  selector: 'mayor-o-menor',
  templateUrl: './mayor-o-menor.component.html',
  styleUrls: ['./mayor-o-menor.component.css']
})
export class MayorOMenorComponent implements OnInit {

  cardDeck: CardDeck;
  lastCard: Card;
  currentCard: Card = new Card(0, '');
  higherSelected: boolean = true;
  points: number = 0;

  revealCurrentCard: boolean = false;
  turnEnded: boolean = false;
  messageForUser: string = 'Seleccioná tu opción y pedí una carta';
  wrongGuess: boolean = false;

  constructor() {
    this.cardDeck = new CardDeck();
    this.lastCard = this.cardDeck.popRandomCard();
  }

  ngOnInit(): void {
    
  }

  setHigher(higherSelected: boolean) {
    this.higherSelected = higherSelected;
  }

  makeGuess() {

    this.currentCard = this.cardDeck.popRandomCard();
    this.turnEnded = true;

    if (this.lastCard.getNumber() === this.currentCard.getNumber()) {
      this.points = this.points - 2;
      this.messageForUser = "Son iguales, mala suerte! Pierde dos puntos.";
      this.wrongGuess = true;
    } else {
      if (this.higherSelected == (this.lastCard.getNumber() < this.currentCard.getNumber())) {
        this.points++;
        this.messageForUser = "Excelente! Suma un punto.";
        this.wrongGuess = false;
      } else {
        this.points--;
        this.messageForUser = "Mala Suerte! Pierde un punto.";
        this.wrongGuess = true;
      }
    }

    this.revealCurrentCard = true;

  }

  newTurn () {

    this.turnEnded = false;
    this.lastCard = this.currentCard;
    this.revealCurrentCard = false;
    this.messageForUser = 'Seleccioná tu opción y pedí una carta.';
    
  }

}
