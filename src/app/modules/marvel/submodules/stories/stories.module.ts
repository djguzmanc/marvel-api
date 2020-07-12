import { NgModule } from '@angular/core';
import { STORIES_ROUTES } from './stories.routes';
import { STORIES_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Stories Module
 */
@NgModule({
  declarations: [...STORIES_COMPONENTS],
  imports: [
    SharedModule,
    STORIES_ROUTES
  ]
})
export class StoriesModule { }
