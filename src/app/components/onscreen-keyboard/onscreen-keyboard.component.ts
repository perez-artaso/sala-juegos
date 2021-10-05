import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'onscreen-keyboard',
  templateUrl: './onscreen-keyboard.component.html',
  styleUrls: [
    "./onscreen-keyboard.component.css"
  ]
})
export class OnscreenKeyboardComponent implements OnInit {

  @Output('onKeyPressed') onKeyPressed: EventEmitter<string>;

  keys: string[] = [];

  constructor() {
    this.onKeyPressed = new EventEmitter();
  }

  ngOnInit(): void {
    this.populateKeys();
  }

  populateKeys() {
    for (let i = 97; i < 123; i++) {
      this.keys.push(
        String.fromCharCode(i)
      );
    }
    this.keys.push('borrar');
  }

  emitKey(key: string) {
    this.onKeyPressed.emit(key);
  }

}
