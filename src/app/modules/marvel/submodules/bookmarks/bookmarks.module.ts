import { NgModule } from '@angular/core';
import { BOOKMARKS_ROUTES } from './bookmarks.routes';
import { BOOKMARKS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Bookmarks Module
 */
@NgModule({
  declarations: [...BOOKMARKS_COMPONENTS],
  imports: [
    SharedModule,
    BOOKMARKS_ROUTES
  ]
})
export class BookmarksModule { }
