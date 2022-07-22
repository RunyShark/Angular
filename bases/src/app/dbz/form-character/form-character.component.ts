import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
})
export class FormCharacterModule {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addNewCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = { name: '', power: 0 };
  }
}
