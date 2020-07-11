import { NgModule } from '@angular/core';
import { SHARED_PIPES } from '.';

/**
 * Shared pipes module
 */
@NgModule({
  declarations: [...SHARED_PIPES],
  exports: [...SHARED_PIPES]
})
export class SharedPipesModule { }
