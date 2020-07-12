import { NgModule } from '@angular/core';
import { MARVEL_UI_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { SharedPipesModule } from '@modules/shared/pipes/shared-pipes.module';

/**
 * MarvelUi Module
 */
@NgModule({
  declarations: [...MARVEL_UI_COMPONENTS],
  imports: [
    SharedModule,
    SharedPipesModule
  ],
  exports: [...MARVEL_UI_COMPONENTS]
})
export class MarvelUiModule { }
