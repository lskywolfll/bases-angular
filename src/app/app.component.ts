import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Counter App';
  counter: number = 0;

  incrementCounter(){
    this.counter++
  }

  decrementCounter(){
    this.counter--
  }
}
