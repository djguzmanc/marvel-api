import { NgModule } from '@angular/core';
import { MARVEL_ROUTES } from './marvel.routes';
import { MARVEL_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Marvel Module
 */
@NgModule({
  declarations: [...MARVEL_COMPONENTS],
  imports: [
    SharedModule,
    MARVEL_ROUTES
  ]
})
export class MarvelModule { }
