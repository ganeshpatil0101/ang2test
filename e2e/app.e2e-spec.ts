import { Ang2testPage } from './app.po';

describe('ang2test App', () => {
  let page: Ang2testPage;

  beforeEach(() => {
    page = new Ang2testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
