import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';
  counter: number = 0;
  base: number = 5;

  incrementCounter() {
    this.counter += this.base;
  }

  decrementCounter() {
    this.counter -= this.base;
  }
}
