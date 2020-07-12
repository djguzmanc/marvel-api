import { Routes, RouterModule } from '@angular/router';
import { MarvelWrapperComponent } from './wrapper/marvel-wrapper.component';
import { CHARACTERS_ROUTE, COMICS_ROUTE, STORIES_ROUTE } from '@utils/constants';

/**
 * Marvel routes
 */
const routes: Routes = [
  {
    path: '',
    component: MarvelWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: CHARACTERS_ROUTE
      },
      {
        path: CHARACTERS_ROUTE,
        loadChildren: () => import('./submodules/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: COMICS_ROUTE,
        loadChildren: () => import('./submodules/comics/comics.module').then(m => m.ComicsModule)
      },
      {
        path: STORIES_ROUTE,
        loadChildren: () => import('./submodules/stories/stories.module').then(m => m.StoriesModule)
      }
    ]
  }
];

/**
 * Marvel routes export
 */
export const MARVEL_ROUTES = RouterModule.forChild(routes);
