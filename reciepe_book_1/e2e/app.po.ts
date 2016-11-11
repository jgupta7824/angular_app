import { browser, element, by } from 'protractor';

export class ReciepeBook1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rb-root h1')).getText();
  }
}
