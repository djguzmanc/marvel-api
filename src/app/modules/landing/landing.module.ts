import { NgModule } from '@angular/core';
import { LANDING_ROUTES } from './landing.routes';
import { LANDING_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Landing Module
 */
@NgModule({
  declarations: [...LANDING_COMPONENTS],
  imports: [
    SharedModule,
    LANDING_ROUTES
  ]
})
export class LandingModule { }
