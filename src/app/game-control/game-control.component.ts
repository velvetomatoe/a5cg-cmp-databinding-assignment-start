import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameCount = 0;

  @Output() incrementCount = new EventEmitter<{count: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.gameCount = setInterval(this.incrementGameCount, 1000);
  }

  incrementGameCount() {
    console.log(this.gameCount);
    this.gameCount++;

    this.incrementCount.emit({
      count: this.gameCount
    });
  }

  onStopGame() {
    clearInterval(this.gameCount);
  }

}
