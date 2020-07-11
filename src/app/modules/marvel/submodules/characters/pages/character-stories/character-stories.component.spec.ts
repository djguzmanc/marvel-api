import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStoriesComponent } from './character-stories.component';

describe('CharacterStoriesComponent', () => {
  let component: CharacterStoriesComponent;
  let fixture: ComponentFixture<CharacterStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
