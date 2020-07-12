import { Injectable } from '@angular/core';
import { IStoriesResponse } from '@utils/interfaces/response';
import { BehaviorSubject } from 'rxjs';

/**
 * Handles stories state
 */
@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  /**
   * The story subject
   */
  private readonly story = new BehaviorSubject<IStoriesResponse | null>(null);

  /**
   * Expose story subject as observable
   */
  readonly story$ = this.story.asObservable();

  /**
   * Saves a new story on state
   * @param story The new story
   */
  cacheStory(story: IStoriesResponse): void {
    this.story.next(story);
  }
}
