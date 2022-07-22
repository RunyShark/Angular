import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-import-character',
  templateUrl: './imprit-character.component.html',
})
export class ImportCharacterModule {
  // @Input() character: Character[] = [];
  get character() {
    return this.dbzService.character;
  }
  constructor(private dbzService: DbzService) {}
}
