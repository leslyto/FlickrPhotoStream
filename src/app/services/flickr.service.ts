import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickrApiUrl: string = 'https://api.flickr.com/services/rest/' // URL to flickr search photos API
  private apiKey: string = '6f93d9bd5fef5831ec592f0b527fdeff'
  private queryParams : any;


  constructor(private http: HttpClient) {
    this.queryParams = {
      'api_key' : this.apiKey,            
      'format' : 'json',
      'nojsoncallback' : '1',
    };
  }

  getPhotos(searchWord, page = 1) {
    this.queryParams['method'] = 'flickr.photos.search';
    this.queryParams['text'] = searchWord;
    this.queryParams['per_page'] = 30;
    this.queryParams['page'] = page;
    return this.http.get(this.flickrApiUrl, { params : this.queryParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  getPhotoInfo(photo) {
    this.queryParams['method'] = 'flickr.photos.getInfo';
    this.queryParams['photo_id'] = photo.id;
    return this.http.get(this.flickrApiUrl, { params : this.queryParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
