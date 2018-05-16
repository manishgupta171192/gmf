import { GlobalMarketForecastPage } from './app.po';

describe('global-market-forecast App', () => {
  let page: GlobalMarketForecastPage;

  beforeEach(() => {
    page = new GlobalMarketForecastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
