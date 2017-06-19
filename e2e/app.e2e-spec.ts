import { AdventureGamePage } from './app.po';

describe('adventure-game App', () => {
  let page: AdventureGamePage;

  beforeEach(() => {
    page = new AdventureGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
