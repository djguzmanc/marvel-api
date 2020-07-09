import { NgModule } from '@angular/core';
import { CHARACTERS_ROUTES } from './characters.routes';
import { CHARACTERS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Characters Module
 */
@NgModule({
  declarations: [...CHARACTERS_COMPONENTS],
  imports: [
    SharedModule,
    CHARACTERS_ROUTES
  ]
})
export class CharactersModule { }
