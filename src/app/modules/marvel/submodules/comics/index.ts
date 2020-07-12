import { ComicProfileComponent } from './pages/comic-profile/comic-profile.component';
import { ComicStoriesComponent } from './pages/comic-stories/comic-stories.component';
import { ComicCharactersComponent } from './pages/comic-characters/comic-characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicsWrapperComponent } from './wrapper/comics-wrapper.component';

/**
 * Comics components
 */
export const COMICS_COMPONENTS: any[] = [
  ComicsWrapperComponent,
  ComicsComponent,
  ComicCharactersComponent,
  ComicStoriesComponent,
  ComicProfileComponent,
];

/**
 * Components
 */

export * from './wrapper/comics-wrapper.component';
export * from './pages/comics/comics.component';
export * from './pages/comic-characters/comic-characters.component';
export * from './pages/comic-stories/comic-stories.component';
export * from './pages/comic-profile/comic-profile.component';
