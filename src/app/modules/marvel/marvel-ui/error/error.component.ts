import { Component, OnInit, Input } from '@angular/core';

/**
 * `Dumb component` for displaying error
 * messages
 */
@Component({
  selector: 'ma-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input()
  message: string = 'Something wrong happened';

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

}
