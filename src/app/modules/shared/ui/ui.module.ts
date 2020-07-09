import { NgModule } from '@angular/core';
import { UI_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Ui Module
 */
@NgModule({
  declarations: [...UI_COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [...UI_COMPONENTS]
})
export class UiModule { }
