import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  character: Character[] = [
    {
      name: 'Goku',
      power: 10,
    },
    {
      name: 'Gjan',
      power: 101,
    },
  ];
}