import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicStoriesComponent } from './comic-stories.component';

describe('ComicStoriesComponent', () => {
  let component: ComicStoriesComponent;
  let fixture: ComponentFixture<ComicStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
