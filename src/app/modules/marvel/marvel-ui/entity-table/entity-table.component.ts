import { Component, Input } from '@angular/core';

/**
 * Base component for entity tables
 */
@Component({
  template: ''
})
export abstract class EntityTableComponent<T> {

  @Input()
  maxHeight!: string;

  @Input()
  items: T[] = [];

  /**
   * Navigate to the item detail view
   * @param item The clicked item
   */
  abstract navigate(item: T): void;

}
