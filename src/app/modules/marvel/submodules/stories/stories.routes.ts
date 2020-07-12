import { Routes, RouterModule } from '@angular/router';
import { StoriesWrapperComponent } from './wrapper/stories-wrapper.component';
import { STORIES_DETAIL, CHARACTERS_ROUTE, COMICS_ROUTE } from '@utils/constants';
import { StoryProfileComponent } from './pages/story-profile/story-profile.component';
import { StoryCharactersComponent } from './pages/story-characters/story-characters.component';
import { StoryComicsComponent } from './pages/story-comics/story-comics.component';

/**
 * Stories routes
 */
const routes: Routes = [
  {
    path: '',
    component: StoriesWrapperComponent,
    children: [
      {
        path: `:${STORIES_DETAIL}`,
        component: StoryProfileComponent,
        children: [
          {
            path: '',
            redirectTo: CHARACTERS_ROUTE
          },
          {
            path: CHARACTERS_ROUTE,
            component: StoryCharactersComponent
          },
          {
            path: COMICS_ROUTE,
            component: StoryComicsComponent
          }
        ]
      }
    ]
  }
];

/**
 * Stories routes export
 */
export const STORIES_ROUTES = RouterModule.forChild(routes);
