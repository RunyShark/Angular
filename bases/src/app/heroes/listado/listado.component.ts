import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'ironman', 'Hulk', 'Capitan America'];
  deleteList(): void {
    this.heroes = [];
  }
}
