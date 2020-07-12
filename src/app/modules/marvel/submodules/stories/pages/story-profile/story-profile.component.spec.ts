import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProfileComponent } from './story-profile.component';

describe('StoryProfileComponent', () => {
  let component: StoryProfileComponent;
  let fixture: ComponentFixture<StoryProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
