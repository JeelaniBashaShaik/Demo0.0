import { Demo0.0Page } from './app.po';

describe('demo0.0 App', () => {
  let page: Demo0.0Page;

  beforeEach(() => {
    page = new Demo0.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
