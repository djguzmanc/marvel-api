import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

/**
 * Modules to export
 */
const modules = [
  MatSidenavModule,
  MatRippleModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSelectInfiniteScrollModule,
  MatAutocompleteModule,
  MatChipsModule
];

/**
 * Exports all common material modules
 */
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
