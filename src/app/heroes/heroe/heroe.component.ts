import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe', //Selecion el div donde se coloca los elementos html
  templateUrl: 'heroe.component.html', //ruta de donde se coloca el html
})
export class HeroeComponent{
    public nombre:string='Ironman';
    public edad:number=45;

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }
}