import { StoriesWrapperComponent } from './stories-wrapper.component';

fdescribe('StoriesWrapperComponent', () => {
  let component: StoriesWrapperComponent;

  beforeEach(() => {
    component = new StoriesWrapperComponent();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
