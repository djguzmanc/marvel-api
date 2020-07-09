import { Routes } from '@angular/router';
import { MARVEL_BASE_ROUTE } from '@utils/constants';

/**
 * Project routes
 */
export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: MARVEL_BASE_ROUTE,
    loadChildren: () => import('./modules/marvel/marvel.module').then(m => m.MarvelModule)
  }
];
