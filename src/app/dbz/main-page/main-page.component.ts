import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzSevice } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregarNuevoPersonaje(argumento: Personaje) {
    //this.personajes.push(argumento);
  }
  constructor(private DbzSevice: DbzSevice) { }
}
