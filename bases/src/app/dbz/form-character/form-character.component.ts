import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
})
export class FormCharacterModule {
  @Input() character: Character[] = [];
  newCharacter: Character = {
    name: '',
    power: 0,
  };
  addNewCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;
    this.character.push(this.newCharacter);
    this.newCharacter = { name: '', power: 0 };
  }
}
