import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicProfileComponent } from './comic-profile.component';

describe('ComicProfileComponent', () => {
  let component: ComicProfileComponent;
  let fixture: ComponentFixture<ComicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
