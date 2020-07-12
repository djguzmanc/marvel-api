import { EntityTableComponent } from './entity-table/entity-table.component';
import { StoriesTableComponent } from './stories-table/stories-table.component';
import { ComicsTableComponent } from './comics-table/comics-table.component';
import { CharactersTableComponent } from './characters-table/characters-table.component';

/**
 * MarvelUi components
 */
export const MARVEL_UI_COMPONENTS: any[] = [
  CharactersTableComponent,
  ComicsTableComponent,
  StoriesTableComponent,
  EntityTableComponent,
];

export * from './characters-table/characters-table.component';
export * from './comics-table/comics-table.component';
export * from './stories-table/stories-table.component';
export * from './entity-table/entity-table.component';
