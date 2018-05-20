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

});
