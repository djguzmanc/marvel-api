import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { BOOKMARKS_INDEX } from '@utils/constants';

/**
 * Bookmarks routes
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: BOOKMARKS_INDEX
  },
  {
    path: BOOKMARKS_INDEX,
    component: BookmarksComponent
  }
];

/**
 * Bookmarks routes export
 */
export const BOOKMARKS_ROUTES = RouterModule.forChild(routes);
