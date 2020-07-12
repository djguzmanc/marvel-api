import { NgModule } from '@angular/core';
import { COMICS_ROUTES } from './comics.routes';
import { COMICS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';
import { NgslAsyncHandlerModule } from '@ngsl/components';
import { SharedPipesModule } from '@modules/shared/pipes/shared-pipes.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MarvelUiModule } from '@modules/marvel/marvel-ui/marvel-ui.module';

/**
 * Comics Module
 */
@NgModule({
  declarations: [...COMICS_COMPONENTS],
  imports: [
    SharedModule,
    UiModule,
    MarvelUiModule,
    NgslAsyncHandlerModule,
    SharedPipesModule,
    SlickCarouselModule,
    COMICS_ROUTES
  ]
})
export class ComicsModule { }
