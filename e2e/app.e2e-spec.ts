import { Angular4LobiadminPage } from './app.po';

describe('angular4-lobiadmin App', () => {
  let page: Angular4LobiadminPage;

  beforeEach(() => {
    page = new Angular4LobiadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
