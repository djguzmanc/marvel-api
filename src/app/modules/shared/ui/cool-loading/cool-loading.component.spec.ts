import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolLoadingComponent } from './cool-loading.component';

describe('CoolLoadingComponent', () => {
  let component: CoolLoadingComponent;
  let fixture: ComponentFixture<CoolLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
