import { Routes, RouterModule } from '@angular/router';
import { CharactersWrapperComponent } from './wrapper/characters-wrapper.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CHARACTERS_INDEX, CHARACTERS_DETAIL, COMICS_ROUTE, STORIES_ROUTE } from '@utils/constants';
import { CharacterProfileComponent } from './pages/character-profile/character-profile.component';
import { CharacterComicsComponent } from './pages/character-comics/character-comics.component';
import { CharacterStoriesComponent } from './pages/character-stories/character-stories.component';

/**
 * Characters routes
 */
const routes: Routes = [
  {
    path: '',
    component: CharactersWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: CHARACTERS_INDEX
      },
      {
        path: CHARACTERS_INDEX,
        component: CharactersComponent
      },
      {
        path: `:${CHARACTERS_DETAIL}`,
        component: CharacterProfileComponent,
        children: [
          {
            path: '',
            redirectTo: COMICS_ROUTE
          },
          {
            path: COMICS_ROUTE,
            component: CharacterComicsComponent
          },
          {
            path: STORIES_ROUTE,
            component: CharacterStoriesComponent
          }
        ]
      }
    ]
  }
];

/**
 * Characters routes export
 */
export const CHARACTERS_ROUTES = RouterModule.forChild(routes);
