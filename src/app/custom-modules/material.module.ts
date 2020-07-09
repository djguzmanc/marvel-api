import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';

/**
 * Modules to export
 */
const modules = [
  MatSidenavModule,
  MatRippleModule,
];

/**
 * Exports all common material modules
 */
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
