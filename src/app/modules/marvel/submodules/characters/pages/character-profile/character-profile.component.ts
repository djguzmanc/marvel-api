import { Component, OnInit } from '@angular/core';
import { CharactersFacade } from '@domain/application/facade';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CHARACTERS_DETAIL, COMICS_ROUTE, STORIES_ROUTE } from '@utils/constants';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { ICharactersResponse } from '@utils/interfaces/response';

/**
 * `Smart Component` for displaying detailed character info
 */
@Component({
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.scss']
})
export class CharacterProfileComponent implements OnInit {

  character$!: Observable<IFacadeApiMap<ICharactersResponse>>;

  links = [
    {
      label: COMICS_ROUTE,
      active: false
    },
    {
      label: STORIES_ROUTE,
      active: false
    },
  ];

  constructor(
    private readonly characterFacade: CharactersFacade,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.character$ = this.characterFacade.getById(this.route.snapshot.params[CHARACTERS_DETAIL]);
    const currentChildRoute = this.router.url.split('/').pop();
    const _link = this.links.find(link => link.label === currentChildRoute);
    if (_link) {
      _link.active = true;
    }
  }

  /**
   * Updates the active link
   * @param index The link index
   */
  onLinkClick(index: number): void {
    if (!this.links[index].active) {
      this.links[index].active = true;
      this.links.forEach((link, idx) => idx !== index ? link.active = false : null);
    }
  }

}
