import { GreenHouseDemoPage } from './app.po';

describe('green-house-demo App', () => {
  let page: GreenHouseDemoPage;

  beforeEach(() => {
    page = new GreenHouseDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
