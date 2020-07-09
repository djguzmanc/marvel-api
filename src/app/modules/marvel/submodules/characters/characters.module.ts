import { NgModule } from '@angular/core';
import { CHARACTERS_ROUTES } from './characters.routes';
import { CHARACTERS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';
import { SharedPipesModule } from '@modules/shared/pipes/shared-pipes.module';
import { NgslAsyncHandlerModule } from '@ngsl/components';

/**
 * Characters Module
 */
@NgModule({
  declarations: [...CHARACTERS_COMPONENTS],
  imports: [
    SharedModule,
    UiModule,
    SharedPipesModule,
    NgslAsyncHandlerModule,
    CHARACTERS_ROUTES
  ]
})
export class CharactersModule { }
