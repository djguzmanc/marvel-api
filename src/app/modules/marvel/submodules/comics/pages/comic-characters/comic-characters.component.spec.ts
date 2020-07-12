import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCharactersComponent } from './comic-characters.component';

describe('ComicCharactersComponent', () => {
  let component: ComicCharactersComponent;
  let fixture: ComponentFixture<ComicCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
