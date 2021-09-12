import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  constructor(private readonly dbzService: DbzService) {}

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNewCharacter.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
