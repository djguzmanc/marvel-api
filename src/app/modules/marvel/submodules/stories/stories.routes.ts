import { Routes, RouterModule } from '@angular/router';
import { StoriesWrapperComponent } from './wrapper/stories-wrapper.component';

/**
 * Stories routes
 */
const routes: Routes = [
  {
    path: '',
    component: StoriesWrapperComponent,
    children: []
  }
];

/**
 * Stories routes export
 */
export const STORIES_ROUTES = RouterModule.forChild(routes);
