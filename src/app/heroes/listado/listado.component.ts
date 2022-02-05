import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado:string='';

  heroes:string[]=['spiderman','ironman','hulk','thor'];



  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}

