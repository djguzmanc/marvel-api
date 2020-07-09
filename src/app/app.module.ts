import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@custom-modules/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Root module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
