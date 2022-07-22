import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: string[] = ['Goku', 'Krilim'];

  addNewCharacter() {}

  ngOnInit(): void {}
}
