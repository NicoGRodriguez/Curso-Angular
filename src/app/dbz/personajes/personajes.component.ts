import { Component } from '@angular/core';
import { DbzSevice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get personajes() {
    return this.dbzSevice.personajes;
  }
  constructor(private dbzSevice: DbzSevice) { }
}
