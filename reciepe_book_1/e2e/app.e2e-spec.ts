import { ReciepeBook1Page } from './app.po';

describe('reciepe-book-1 App', function() {
  let page: ReciepeBook1Page;

  beforeEach(() => {
    page = new ReciepeBook1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
