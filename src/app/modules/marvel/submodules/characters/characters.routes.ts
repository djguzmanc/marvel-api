import { Routes, RouterModule } from '@angular/router';
import { CharactersWrapperComponent } from './wrapper/characters-wrapper.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CHARACTERS_INDEX } from '@utils/constants';

/**
 * Characters routes
 */
const routes: Routes = [
  {
    path: '',
    component: CharactersWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: CHARACTERS_INDEX
      },
      {
        path: CHARACTERS_INDEX,
        component: CharactersComponent
      }
    ]
  }
];

/**
 * Characters routes export
 */
export const CHARACTERS_ROUTES = RouterModule.forChild(routes);
