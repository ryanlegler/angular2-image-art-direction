export class Angular2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-app-app h1')).getText();
  }
}
