import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'ironman', 'Hulk', 'Capitan America'];
  saveHero: string | undefined = '';
  deleteList(): void {
    const save = this.heroes.pop();
    this.saveHero = save;
  }
}
