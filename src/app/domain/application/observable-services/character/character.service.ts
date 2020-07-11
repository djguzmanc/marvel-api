import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICharactersResponse } from '@utils/interfaces/response';

/**
 * Handles characters state
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  /**
   * The character subject
   */
  private readonly character = new BehaviorSubject<ICharactersResponse | null>(null);

  /**
   * Expose character subject as observable
   */
  readonly character$ = this.character.asObservable();

  /**
   * Saves a new character on state
   * @param character The new character
   */
  cacheCharacter(character: ICharactersResponse): void {
    this.character.next(character);
  }
}
