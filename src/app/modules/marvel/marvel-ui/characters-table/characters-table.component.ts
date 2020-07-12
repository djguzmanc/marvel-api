import { Component, OnInit } from '@angular/core';
import { ICharactersResponse } from '@utils/interfaces/response';
import { FADE_IN_OUT } from '@utils/animations';
import { Router } from '@angular/router';
import { CHARACTERS_ROUTE, MARVEL_BASE_ROUTE } from '@utils/constants';
import { CharactersFacade } from '@domain/application/facade';
import { EntityTableComponent } from '../entity-table/entity-table.component';

/**
 * `Dumb component` for displaying a characters
 * table
 */
@Component({
  selector: 'ma-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss'],
  animations: [
    FADE_IN_OUT
  ]
})
export class CharactersTableComponent extends EntityTableComponent<ICharactersResponse> implements OnInit {

  displayedColumns: string[] = ['thumbnail', 'name', 'description', 'actions'];

  constructor(
    private readonly router: Router,
    private readonly characterFacade: CharactersFacade
  ) {
    super();
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

  /**
   * Navigates to character detail view
   * @param character Clicked story
   */
  navigate(character: ICharactersResponse): void {
    this.characterFacade.cacheCharacter(character);
    this.router.navigate(['/', `${MARVEL_BASE_ROUTE}`, `${CHARACTERS_ROUTE}`, character.id]);
  }

}
