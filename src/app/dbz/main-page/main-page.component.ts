import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  /*personajes: Personaje[]=[];
  get personajes(): Personaje [] {
    return this.dbzService.personajes;
  }*/


  nuevo:Personaje ={
    nombre: 'Maestro Roshi',
    poder: 1000
  }
  /*agregarNuevoPersonaje( arg: Personaje){
    this.personajes.push(arg);
  }*/
  constructor(private dbzService:DbzService){
    //this.personajes = this.dbzService.personajes;

    
  }
}
