import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Flickr Photo Stream by Stefan Stoev');
  });

  it('should set search term', function() {
    page.setSearchTerm('Bulgaria');
    expect(page.getSearchTerm()).toBe('Bulgaria');
  });

  it('should call Flickr API', function() {
    page.searchPhotos();
    expect();
  });

  it('should return 30 photos', function() {
    page.getPhotosCount().then(function(count){
      expect(count).toEqual(30);
    });
  });

  it('should have infinite scroll', function() {
    page.scrollPageToBottom().then(function(){
      setTimeout(function(){
        page.getPhotosCount().then(function(count){
          expect(count).toEqual(60);
        });
      }, 2000)
    })
  })

});
