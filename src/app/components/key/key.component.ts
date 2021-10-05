import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent {

  @Input('keyValue') keyValue: string;
  @Input('isSpaceBar') isSpaceBar: boolean;
  @Output('onKeyPressed') onKeyPressed: EventEmitter<string>;

  constructor() {
    this.keyValue = '';
    this.onKeyPressed = new EventEmitter();
    this.isSpaceBar = false;
  }

  keyPressed() {
    this.onKeyPressed.emit(this.keyValue);
  }

}
