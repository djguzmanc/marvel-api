import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Event as NavigationEvent } from '@angular/router';
import { SubSink } from 'subsink';

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

  /**
   * Initializes routes object
   */
  initializeRoutes(router: Router, ...routes: string[]): void {
    this.links = [];
    routes.forEach(route => this.links.push({
      label: route,
      active: false
    }));

    this.activateRoutes(router.url.split('/').pop());

    this.subsink.sink = router.events.pipe(
      filter(
        (event: NavigationEvent) => {
          return (event instanceof NavigationEnd);
        }
      )
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
