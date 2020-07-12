import { Router } from '@angular/router';

/**
 * Describes the common behavior for
 * profile components
 */
export abstract class EntityProfile {

  links: Array<{
    label: string;
    active: boolean;
  }> = [];

  /**
   * Initializes routes object
   */
  initializeRoutes(router: Router, ...routes: string[]): void {
    routes.forEach(route => this.links.push({
      label: route,
      active: false
    }));

    const currentChildRoute = router.url.split('/').pop();
    const _link = this.links.find(link => link.label === currentChildRoute);
    if (_link) {
      _link.active = true;
    }
  }

  /**
   * Updates the active link
   * @param index The link index
   */
  onLinkClick(index: number): void {
    if (!this.links[index].active) {
      this.links[index].active = true;
      this.links.forEach((link, idx) => idx !== index ? link.active = false : null);
    }
  }
}
