import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  styleUrls: ['../app.component.css'],
  template: `
    <title>{{ title }}</title>
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <div>
      <button (click)="incrementCounter()">+ {{ base }}</button>
      <span>{{ counter }}</span>
      <button (click)="decrementCounter()">- {{ base }}</button>
    </div>
  `,
})
export class ContadorComponent {
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
