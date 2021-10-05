import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  stringToGuess: string = '';
  notGuessed: string = '';
  wrongGuesses: number = 0;
  chances: number = 5;

  exposedStr: string = '';

  inputEnabled: boolean = true;
  gameOver: boolean = false;
  won: boolean = false;

  constructor() { 
    this.stringToGuess = 'ahorcado';
    this.notGuessed = this.stringToGuess;
    this.setExposedStr();
  }

  ngOnInit(): void {
  }

  makeGuess(letter: string) {

    this.inputEnabled = false;

    if (this.notGuessed.includes(letter)) {

      this.notGuessed = this.notGuessed.split(letter).join('');

      this.revealChars(
        letter, 
        this.charPositionsInStr(this.stringToGuess, letter, [])
      );

    } else this.wrongGuesses++;

    if (this.wrongGuesses == this.chances) this.gameOver = true;
    
    if (this.notGuessed == '') {
      this.gameOver = true;
      this.won = true;
    }

    if (!this.gameOver) this.inputEnabled = true;

  }
  
  setExposedStr() {
    for (let i = 0; i < this.stringToGuess.length; i++) {
      this.exposedStr += '_';
    }
  }

  revealChars(char: string, positions: Array<number>) {

    positions.forEach(
      (position) => {
        this.exposedStr = 
          (this.exposedStr.slice(0, position) + 
          char + 
          this.exposedStr.slice(position + 1))
      }
    );
    
  }

  charPositionsInStr(str: string, char: string, positions_found: Array<number>, last_position_found: number = -1): Array<number> {
    
    const indexFound = str.indexOf(char);

    if (indexFound !== -1) {
      return this.charPositionsInStr(
        str.slice(indexFound+1),
        char,
        positions_found.concat([indexFound + (last_position_found + 1)]),
        indexFound
      )
    }
    
    return positions_found;

  }

  reset() {
    location.reload();
  }

}
