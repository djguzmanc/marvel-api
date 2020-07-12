import { Routes, RouterModule } from '@angular/router';
import { ComicsWrapperComponent } from './wrapper/comics-wrapper.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { COMICS_INDEX, COMICS_DETAIL, CHARACTERS_ROUTE, STORIES_ROUTE } from '@utils/constants';
import { ComicProfileComponent } from './pages/comic-profile/comic-profile.component';
import { ComicCharactersComponent } from './pages/comic-characters/comic-characters.component';
import { ComicStoriesComponent } from './pages/comic-stories/comic-stories.component';

/**
 * Comics routes
 */
const routes: Routes = [
  {
    path: '',
    component: ComicsWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: COMICS_INDEX
      },
      {
        path: COMICS_INDEX,
        component: ComicsComponent
      },
      {
        path: `:${COMICS_DETAIL}`,
        component: ComicProfileComponent,
        children: [
          {
            path: '',
            redirectTo: CHARACTERS_ROUTE
          },
          {
            path: CHARACTERS_ROUTE,
            component: ComicCharactersComponent
          },
          {
            path: STORIES_ROUTE,
            component: ComicStoriesComponent
          }
        ]
      }
    ]
  }
];

/**
 * Comics routes export
 */
export const COMICS_ROUTES = RouterModule.forChild(routes);
