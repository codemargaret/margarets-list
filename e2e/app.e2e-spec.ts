import { MargaretsListPage } from './app.po';

describe('margarets-list App', () => {
  let page: MargaretsListPage;

  beforeEach(() => {
    page = new MargaretsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
