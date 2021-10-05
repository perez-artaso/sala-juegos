import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card: Card = new Card(0, '');
  @Input('backTurned') backTurned: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  turnCard() {
    this.backTurned = !this.backTurned;
  }

}
