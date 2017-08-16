import {NavigationItem} from './navigation-item';

describe('NavigationItem', () => {
  it('should create an instance', () => {
    expect(new NavigationItem("Demo title", "demo-path", "demo-icon",  1)).toBeTruthy();
  });
});
