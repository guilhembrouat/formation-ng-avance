import { GithubExplorerPage } from './app.po';

describe('github-explorer App', () => {
  let page: GithubExplorerPage;

  beforeEach(() => {
    page = new GithubExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
