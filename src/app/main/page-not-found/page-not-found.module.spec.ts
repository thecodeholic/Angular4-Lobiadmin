import PageNotFoundModule from './page-not-found.module';

describe('PageNotFoundModule', () => {
  let pageNotFoundModule;

  beforeEach(() => {
    pageNotFoundModule = new PageNotFoundModule();
  });

  it('should create an instance', () => {
    expect(pageNotFoundModule).toBeTruthy();
  })
});
