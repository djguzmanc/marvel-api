import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComicsComponent } from './story-comics.component';

describe('StoryComicsComponent', () => {
  let component: StoryComicsComponent;
  let fixture: ComponentFixture<StoryComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
