import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'el-camino',
  templateUrl: './el-camino.component.html',
  styleUrls: ['./el-camino.component.css']
})
export class ElCaminoComponent implements OnInit {

  directionObject: Object = {};
  lives: Array<number> = [1,1,1];

  timer: number = 5;

  message: string;

  lightsOn: boolean = true;

  gameOver: boolean = true;
  won: boolean = false;

  playerScore: number = 0;

  constructor(private scores: ScoreService) { 
    this.message = "¡ Recordá el camino !";
  }

  ngOnInit(): void {
    this.setTimer();
    this.getScores();
  }

  moveChip(direction: string) {
    this.directionObject = {
      direction: direction,
      timestamp: Date.now()
    };
  }

  wrongMove() {
    this.lives.pop()
    
    if(this.lives.length == 0) {
      this.gameOver = true;
      this.message = "¡PERDISTE!";
    }

  }

  setMessageClasses() {
    return {
      'alert alert-danger': this.lives.length == 0,
      'alert alert-success': this.lives.length != 0
    };
  }

  newGame() {
    location.reload();
  }

  setTimer() {
    const interval = setInterval(
      () => {
        this.timer--;
        if (this.timer == 0) {
          this.lightsOut(interval)
        }
      },
      1000
    );
  }

  lightsOut(intervalRef: any) {
    clearInterval(intervalRef);
    this.gameOver = false;
    this.lightsOn = false;
  }

  wonGame() {
    this.won = true;
    this.gameOver = true;
    this.lightsOn = true;
    this.message = "¡Felicidades! ¡ GANASTE !";
    this.playerScore = this.playerScore + this.lives.length;
    this.scores.updateScore(
      'elCaminoScores',
      this.playerScore
    )
  }

  getScores() {
    this.scores.getScore('elCaminoScores').then(
      (score) => this.playerScore = score
    )
  }

}
