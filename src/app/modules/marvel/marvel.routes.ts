import { Routes, RouterModule } from '@angular/router';
import { MarvelWrapperComponent } from './wrapper/marvel-wrapper.component';
import { CHARACTERS_ROUTE } from '@utils/constants';

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
      }
    ]
  }
];

/**
 * Marvel routes export
 */
export const MARVEL_ROUTES = RouterModule.forChild(routes);
