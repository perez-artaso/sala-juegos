import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ECDirection } from 'src/app/models/el-camino/ecdirection';
import { RoadBlock } from 'src/app/models/el-camino/road-block';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {

  board: Array<Array<RoadBlock | null>> = [];

  roadPath: Array<Array<number>> = [];

  @Input('rows') rows: number = 0;
  @Input('columns') columns: number = 0;

  playerPosition: number [] = [0, 0];

  @Input('direction') inputtedDirection: Object = {};
  @Input('lightsOn') lightsOn: boolean = true;

  wrongMoves: number = 0;
  @Output('onWrongMove') wrongMoveEmitter: EventEmitter<void> = new EventEmitter();
  @Output('onVictory') victoryEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.setRoadPath();
    this.buildBoard();
  }

  ngOnChanges(changes: SimpleChanges) {

    if(changes.inputtedDirection) {
      if (changes.inputtedDirection.previousValue) {
        this.moveChip(
          changes.inputtedDirection.currentValue
        );
      }
    }  

  }

  setRoadPath () {
    const start = [0, 0];
    const end = [this.rows - 1, this.columns - 1];

    this.roadPath = this.generatePath([start], end);
  }

  generatePath(currentPath: Array<Array<number>>, destination: Array<number>): Array<Array<number>> {

    const randomDirection = Math.floor(Math.random() * 2);
    const otherDirection = randomDirection === 0 ? 1 : 0;

    const lastStep = currentPath[currentPath.length - 1];
    let newStep = lastStep.concat();

    if ((lastStep[0] != destination[0]) || (lastStep[1] != destination[1])) {

      if (lastStep[randomDirection] < destination[randomDirection]) {

        newStep[randomDirection] = lastStep[randomDirection] + 1;

      } else if (lastStep[otherDirection] < destination[otherDirection]) {

        newStep[otherDirection] = lastStep[otherDirection] + 1;

      }

      return this.generatePath(currentPath.concat([newStep]), destination);

    }

    return currentPath;

  }

  buildBoard () {

    let boardUnderConstruction: Array<Array<RoadBlock | null>> = [];
    
    const path = this.roadPath.concat();
    let pathIndex = 0;

    for (let r = 0; r < this.rows; r++) {

      boardUnderConstruction.push([]);

      for (let c = 0; c < this.columns; c++) {
        
        if (
          r == path[pathIndex][0] && c == path[pathIndex][1]
        ) {
          boardUnderConstruction[boardUnderConstruction.length - 1].push(
            new RoadBlock(
              this.determineFrom(path[pathIndex], path[pathIndex - 1]),
              this.determineTo(path[pathIndex], path[pathIndex + 1])
            )
          );
          pathIndex++;
        } else {
          boardUnderConstruction[boardUnderConstruction.length - 1].push(
            null
          );
        }

      }

    }

    this.board = boardUnderConstruction;

  }

  determineFrom(currentStep: Array<number>, lastStep: Array<number>): ECDirection {
    
    if(!lastStep) {
      return ECDirection.Left
    } else {

      const lastRow = lastStep[0];
      const currentRow = currentStep[0];

      if (currentStep[0] == 0 && currentStep[1] == 0) {
        return ECDirection.Left
      } else {
        if (currentRow != lastRow) {
          return ECDirection.Up;
        } else return ECDirection.Left;
      }

    }    

  }

  determineTo(currentStep: Array<number>, nextStep: Array<number>): ECDirection {

    if (!nextStep) {
      return ECDirection.Right;
    } else {

      const nextRow = nextStep[0];
      const currentRow = currentStep[0];

      if (currentRow != nextRow) {
        return ECDirection.Down;
      } else return ECDirection.Right;

    }
    
  }

  moveChip(directionObject: any) {
    
    let wright: boolean = false;
    const moving_direction = directionObject.direction;

    const newPosition = this.getNewCoordinate(this.playerPosition, moving_direction);

    this.roadPath.forEach(
      (position: number[]) => {
        if (
          (position[0] === newPosition[0])
          &&
          (position[1] === newPosition[1])
        ) {
          this.playerPosition = newPosition;
          wright = true;
          this.checkIfPlayerWon(newPosition);
        }
      }
    );

    if (!wright) this.tookWrongWay();

  }

  getNewCoordinate (currentPosition: number[], direction: string) {
    
    let newPosition = currentPosition.concat();

    switch (direction) {
      case 'u':
        newPosition[0]--;
      break;
      case 'r':
        newPosition[1]++;
      break;
      case 'd':
        newPosition[0]++;
      break;
      case 'l':
        newPosition[1]--;
      break;
    }

    return newPosition;

  }

  tookWrongWay () {
    this.wrongMoves++;
    this.emitWrongMove();
  }

  emitWrongMove() {
    this.wrongMoveEmitter.emit();
  }

  checkIfPlayerWon(position: number[]) {
    if (
      (position[0] == (this.rows - 1)) &&
      (position[1] == (this.columns - 1))
    ) this.victoryEmitter.emit();
  }

}
