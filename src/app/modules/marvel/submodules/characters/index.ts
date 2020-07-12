import { CharacterStoriesComponent } from './pages/character-stories/character-stories.component';
import { CharacterComicsComponent } from './pages/character-comics/character-comics.component';
import { CharacterProfileComponent } from './pages/character-profile/character-profile.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersWrapperComponent } from './wrapper/characters-wrapper.component';

/**
 * Characters components
 */
export const CHARACTERS_COMPONENTS: any[] = [
  CharactersWrapperComponent,
  CharactersComponent,
  CharacterProfileComponent,
  CharacterComicsComponent,
  CharacterStoriesComponent,
];

/**
 * Components
 */

export * from './wrapper/characters-wrapper.component';
export * from './pages/characters/characters.component';
export * from './pages/character-profile/character-profile.component';
export * from './pages/character-comics/character-comics.component';
export * from './pages/character-stories/character-stories.component';
