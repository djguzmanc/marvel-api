import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCharactersComponent } from './story-characters.component';

describe('StoryCharactersComponent', () => {
  let component: StoryCharactersComponent;
  let fixture: ComponentFixture<StoryCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
