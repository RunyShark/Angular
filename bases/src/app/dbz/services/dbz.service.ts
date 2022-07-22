import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _character: Character[] = [
    {
      name: 'Goku',
      power: 10,
    },
    {
      name: 'Gjan',
      power: 101,
    },
  ];

  get character(): Character[] {
    return [...this._character];
  }

  constructor() {}

  addCharacter(character: Character) {
    this._character.push(character);
  }
}
