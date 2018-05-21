import { TestBed, async, inject } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { FlickrService } from './flickr.service'

describe('FlickrService', () => {
  
  let service: FlickrService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlickrService
      ],
      imports: [
        HttpClientModule,
      ],
    });

    service = TestBed.get(FlickrService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
