import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ECDirection } from 'src/app/models/el-camino/ecdirection';
import { RoadBlock } from 'src/app/models/el-camino/road-block';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit, OnChanges {

  @Input('roadBlock') roadBlock: RoadBlock | null = null;
  @Input('coordinates') coordinates: number[] = [];
  @Input('playerPosition') playerPosition: number [] = [];
  @Input('lightsOn') isLightOn: boolean = true;

  isPlayerHere: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
    this.checkForPlayer();
  }

  ngOnChanges (changes: SimpleChanges) {
    
    if(changes.playerPosition) {
      if (changes.playerPosition.previousValue) {
        this.checkForPlayer();
      }
    }  
    
  }

  setClasses() {
    if (this.roadBlock) {
      return {
        'left-up': this.roadBlock.hasDirections(ECDirection.Left, ECDirection.Up),
        'left-down': this.roadBlock.hasDirections(ECDirection.Left, ECDirection.Down),
        'right-up': this.roadBlock.hasDirections(ECDirection.Right, ECDirection.Up),
        'right-down': this.roadBlock.hasDirections(ECDirection.Right, ECDirection.Down)
      }
    } else return {
      'wall': true
    }
  }

  checkForPlayer () {
    this.isPlayerHere = (
      (this.coordinates[0] === this.playerPosition[0])
      &&
      (this.coordinates[1] === this.playerPosition[1])
    );
  }

  

}