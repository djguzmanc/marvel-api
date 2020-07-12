import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesTableComponent } from './stories-table.component';

describe('StoriesTableComponent', () => {
  let component: StoriesTableComponent;
  let fixture: ComponentFixture<StoriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
