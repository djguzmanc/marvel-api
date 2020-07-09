import { Routes, RouterModule } from '@angular/router';
import { CharactersWrapperComponent } from './wrapper/characters-wrapper.component';
import { CharactersComponent } from './pages/characters/characters.component';

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
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: CharactersComponent
      }
    ]
  }
];

/**
 * Characters routes export
 */
export const CHARACTERS_ROUTES = RouterModule.forChild(routes);
