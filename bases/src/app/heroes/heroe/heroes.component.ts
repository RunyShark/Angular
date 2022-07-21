import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 23;
  superPower: string = 'Genio';

  greeting(): string {
    return ` Hola ${this.name} `;
  }
}
