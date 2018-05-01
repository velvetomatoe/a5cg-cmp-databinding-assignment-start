import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementCount = new EventEmitter<number>();

  interval;
  gameCount = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.incrementCount.emit(this.gameCount + 1);
      this.gameCount++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
