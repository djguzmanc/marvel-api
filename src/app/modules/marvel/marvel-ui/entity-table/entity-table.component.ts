import { Component, Input } from '@angular/core';

/**
 * Base component for entity tables
 */
@Component({
  template: ''
})
export class EntityTableComponent<T> {

  @Input()
  maxHeight!: string;

  @Input()
  items: T[] = [];

}
