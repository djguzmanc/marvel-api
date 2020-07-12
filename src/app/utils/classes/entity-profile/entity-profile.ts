import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Event as NavigationEvent } from '@angular/router';
import { SubSink } from 'subsink';
import { BookmarksFacade } from '@domain/application/facade/bookmarks/bookmarks.facade';
import { Observable } from 'rxjs';
import { MarvelEntity } from '@domain/model/enums';

/**
 * Describes the common behavior for
 * profile components
 */
export abstract class EntityProfile {

  readonly subsink = new SubSink();

  links: Array<{
    label: string;
    active: boolean;
  }> = [];

  constructor(
    public readonly router: Router,
    public readonly bookmarksFacade: BookmarksFacade,
  ) { }

  /**
   * Removes undesired children on the route
   * identifier
   * @param url The url
   */
  fixRoute(url: string): string {
    const fixedRoute = url.split('/');
    fixedRoute.pop();
    return fixedRoute.join('/');
  }

  /**
   * Tells if the route is bookmarked
   */
  get isBookmarked$(): Observable<boolean> {
    return this.bookmarksFacade.bookmarks$.pipe(
      map(bookmarks => bookmarks[this.fixRoute(this.router.url)] ? true : false)
    );
  }

  /**
   * Adds a new bookmark
   */
  addBookmark(type: MarvelEntity, name: string): void {
    this.bookmarksFacade.addBookmark(this.fixRoute(this.router.url), type, name);
  }

  /**
   * Removes a new bookmark
   */
  removeBookmark(): void {
    this.bookmarksFacade.removeBookmark(this.fixRoute(this.router.url));
  }

  /**
   * Initializes routes object
   */
  initializeRoutes(...routes: string[]): void {
    this.links = [];
    routes.forEach(route => this.links.push({
      label: route,
      active: false
    }));

    this.activateRoutes(this.router.url.split('/').pop());

    this.subsink.sink = this.router.events.pipe(
      filter((event: NavigationEvent) => event instanceof NavigationEnd)
    ).subscribe(
      (event: NavigationEnd) => {
        // Check active route
        this.activateRoutes(event.url.split('/').pop());
      }
    );
  }

  /**
   * Initializes the active routes
   * @param router The router instance
   */
  activateRoutes(route?: string): void {
    this.links.forEach(link => {
      if (link.label === route) {
        link.active = true;
      } else {
        link.active = false;
      }
    });
  }
}
