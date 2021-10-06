import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'd-pad',
  templateUrl: './d-pad.component.html',
  styleUrls: ['./d-pad.component.css']
})
export class DPadComponent implements OnInit {

  @Output('onInput') inputEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitInput(input: string) {
    this.inputEmitter.emit(input);
  }

}
