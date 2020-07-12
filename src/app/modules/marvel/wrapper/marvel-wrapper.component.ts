import { Component, OnInit } from '@angular/core';
import { CHARACTERS_ROUTE, CHARACTERS_INDEX, COMICS_ROUTE, COMICS_INDEX } from '@utils/constants';

/**
 * Marvel module wrapper
 */
@Component({
  templateUrl: './marvel-wrapper.component.html',
  styleUrls: ['./marvel-wrapper.component.scss']
})
export class MarvelWrapperComponent implements OnInit {

  readonly ALL_CHARACTERS = `${CHARACTERS_ROUTE}/${CHARACTERS_INDEX}`;
  readonly ALL_COMICS = `${COMICS_ROUTE}/${COMICS_INDEX}`;

  // tslint:disable-next-line: completed-docs
  ngOnInit() { }
}
