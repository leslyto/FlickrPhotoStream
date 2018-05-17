import { TestBed, async, inject } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { FlickrService } from './flickr.service'

describe('FlickrService', () => {
  
  let service: FlickrService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlickrService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });

    service = TestBed.get(FlickrService)
    httpMock = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get photos from flickr via GET', () => {
    let apiUrl = 'https://api.flickr.com/services/rest/?api_key=6f93d9bd5fef5831ec592f0b527fdeff&format=json&nojsoncallback=1&method=flickr.photos.search&text=London&per_page=30&page=1'

    const dummyPhotos = [
      { id: 40359067020, owner: '117866697@N06', secret: '0e417e78ee', server: '825', title: 'test title', farm: 1 },
      { id: 40359067021, owner: '117866697@N04', secret: '0e417e78ee', server: '825', title: 'test title2', farm: 1 }
    ]

    service.getPhotos('london').subscribe(photos => {
      expect(photos.length).toBe(2)
      expect(photos).toEqual(dummyPhotos)
    })
    const request = httpMock.expectOne(apiUrl)
    
    expect(request.request.method).toBe('GET')

    request.flush(dummyPhotos)
  });

});
