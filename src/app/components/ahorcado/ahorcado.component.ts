import { Component, OnInit } from '@angular/core';
import { WordBag } from 'src/app/models/word-bag';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  wordBag: WordBag;

  playerScore: number = 0;

  stringToGuess: string = '';
  notGuessed: string = '';
  wrongGuesses: number = 0;
  chances: number = 5;

  exposedStr: string = '';

  inputEnabled: boolean = true;
  gameOver: boolean = false;
  won: boolean = false;

  constructor(private scores: ScoreService) {
    this.wordBag = new WordBag();
    this.stringToGuess = this.wordBag.getWord();
    this.notGuessed = this.stringToGuess;
    this.setExposedStr();
  }

  ngOnInit(): void {

    this.getScore();

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

    if (this.wrongGuesses == this.chances) this.defeat();
    
    if (this.notGuessed == '') {
      this.victory();
    }

    if (!this.gameOver) this.inputEnabled = true;

  }

  defeat() {
    this.gameOver = true;
    this.playerScore = this.playerScore - 5;
    this.scores.updateScore(
      'ahorcadoScores',
      this.playerScore
    );
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

  getScore() {
    this.scores.getScore(
      'ahorcadoScores'
    ).then(
      (score) => {
        this.playerScore = score;
      }
    );
  }

  victory() {
    this.gameOver = true;
    this.won = true;
    this.playerScore = this.playerScore + this.chances - this.wrongGuesses;
    this.scores.updateScore(
      'ahorcadoScores',
      this.playerScore
    )
  }

}
