import { Routes, RouterModule } from '@angular/router';
import { WELCOME_ROUTE } from '@utils/constants';
import { WelcomeComponent } from './pages/welcome/welcome.component';

/**
 * Landing routes
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: WELCOME_ROUTE
  },
  {
    path: WELCOME_ROUTE,
    component: WelcomeComponent
  }
];

/**
 * Landing routes export
 */
export const LANDING_ROUTES = RouterModule.forChild(routes);
