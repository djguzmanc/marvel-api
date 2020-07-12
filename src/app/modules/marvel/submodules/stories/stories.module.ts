import { NgModule } from '@angular/core';
import { STORIES_ROUTES } from './stories.routes';
import { STORIES_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';
import { MarvelUiModule } from '@modules/marvel/marvel-ui/marvel-ui.module';
import { NgslAsyncHandlerModule } from '@ngsl/components';
import { SharedPipesModule } from '@modules/shared/pipes/shared-pipes.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

/**
 * Stories Module
 */
@NgModule({
  declarations: [...STORIES_COMPONENTS],
  imports: [
    SharedModule,
    UiModule,
    MarvelUiModule,
    NgslAsyncHandlerModule,
    SharedPipesModule,
    SlickCarouselModule,
    STORIES_ROUTES
  ]
})
export class StoriesModule { }
