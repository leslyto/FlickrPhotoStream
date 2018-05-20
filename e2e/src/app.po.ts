import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchTerm() {
    return element(by.id('search-flickr-input')).getAttribute('value');
  }

  setSearchTerm(term) {
    return element(by.id('search-flickr-input')).clear().then(function(){
      element(by.id('search-flickr-input')).sendKeys(term);
    })
  }

  searchPhotos() {
    element(by.id("search-flickr-btn")).click();
    return true;
  }

  getPhotosCount() {
    return element.all(by.css('.photo_wrap')).then(function(photos) {
      return photos.length;
    })
  }

  scrollPageToBottom() {
    return browser.executeScript('window.scrollTo(0,10000);');
  }
}
