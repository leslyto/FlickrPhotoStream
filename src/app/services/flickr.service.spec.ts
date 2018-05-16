import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlickrService
      ],
      imports: [
        HttpClientModule
      ],
    });
  });

  it('should be created', inject([FlickrService], (service: FlickrService) => {
    expect(service).toBeTruthy();
  }));

  it('should get photos from flickr', inject([FlickrService], (service: FlickrService) => {
    let apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dec4d2a3d99e4ceda351a6c6f557aa20&text=london&format=json&nojsoncallback=1'
    expect(service.getPhotos(apiUrl)).toBeTruthy();
  }));

});
