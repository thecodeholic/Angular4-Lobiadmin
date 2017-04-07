import {NavigationItem} from './navigation-item';

describe('NavigationItem', () => {
  it('should create an instance', () => {
    expect(new NavigationItem("Demo title", "demo-icon", "demo-path", 1)).toBeTruthy();
  });
});
