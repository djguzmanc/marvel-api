import { StoryComicsComponent } from './pages/story-comics/story-comics.component';
import { StoryCharactersComponent } from './pages/story-characters/story-characters.component';
import { StoryProfileComponent } from './pages/story-profile/story-profile.component';
import { StoriesWrapperComponent } from './wrapper/stories-wrapper.component';

/**
 * Stories components
 */
export const STORIES_COMPONENTS: any[] = [
  StoriesWrapperComponent,
  StoryProfileComponent,
  StoryCharactersComponent,
  StoryComicsComponent,
];

/**
 * Components
 */

export * from './wrapper/stories-wrapper.component';
export * from './pages/story-profile/story-profile.component';
export * from './pages/story-characters/story-characters.component';
export * from './pages/story-comics/story-comics.component';
