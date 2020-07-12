import { Component, OnInit } from '@angular/core';
import { CHARACTERS_ROUTE, STORIES_ROUTE, COMICS_DETAIL } from '@utils/constants';
import { IComicsResponse } from '@utils/interfaces/response';
import { Observable } from 'rxjs';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { ComicsFacade } from '@domain/application/facade';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * `Smart component` for displaying the comic
 * detailed info
 */
@Component({
  templateUrl: './comic-profile.component.html',
  styleUrls: ['./comic-profile.component.scss']
})
export class ComicProfileComponent implements OnInit {

  slideConfig = { arrows: true, dots: true, slidesToShow: 1, slidesToScroll: 1 };

  character$!: Observable<IFacadeApiMap<IComicsResponse>>;

  links = [
    {
      label: CHARACTERS_ROUTE,
      active: false
    },
    {
      label: STORIES_ROUTE,
      active: false
    },
  ];

  constructor(
    private readonly comicsFacade: ComicsFacade,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.character$ = this.comicsFacade.getById(this.route.snapshot.params[COMICS_DETAIL]);
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
