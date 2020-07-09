import { Component, OnInit } from '@angular/core';
import { MARVEL_BASE_ROUTE } from '@utils/constants';

/**
 * `Dumb component` for display
 * a welcome page
 */
@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  readonly MARVEL_ROUTE = `../${MARVEL_BASE_ROUTE}`;

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

}
