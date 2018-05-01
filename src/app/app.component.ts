import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementCount(passedNumber: number) {
    (((passedNumber % 2) === 0) ? this.evenNumbers.push(passedNumber) : this.oddNumbers.push(passedNumber));
  }

}
