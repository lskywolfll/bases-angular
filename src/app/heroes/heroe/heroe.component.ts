import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroe.component.html',
  styleUrls: ['../../app.component.css'],
})
export class HeroesComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad -= 10;
  }
}
