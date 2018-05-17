import { Component, OnInit } from '@angular/core'
import { FlickrService } from '../services/flickr.service'
import { HttpErrorResponse } from '@angular/common/http'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos
  photoInfo
  searchWord: string = "London" // default search set to "London" when launching the app for the purpose of presentation
  filterText: string = "" 
  page: number

  constructor(private FlickrService: FlickrService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos() {
    if(this.searchWord !== "") {
      this.FlickrService.getPhotos(this.searchWord)
        .subscribe(
          results => this.loadPhotos(results), 
          err => this.handleError(err)
        )
      this.page = 1
    }
  }
  
  loadPhotos(data) {
    this.photos = data.photos.photo
  }

  onScroll() {
    // Getting more photos by querying next page results from flickr
    this.page = this.page + 1
    this.FlickrService.getPhotos(this.searchWord, this.page)
      .subscribe(
        results => this.appendPhotos(results), 
        err => this.handleError(err)
      )
  }

  appendPhotos(new_photos) {
    this.photos = this.photos.concat(new_photos.photos.photo)
  }

  showInfo(content,photo) {
    this.FlickrService.getPhotoInfo(photo)
      .subscribe(
        photoInfo => {
          this.photoInfo = photoInfo
          this.modalService.open(content, { centered: true, size: 'lg' })
        },
        err => this.handleError(err)
      )
  }

  checkIfResults() {
    return this.photos.length === 0
  }
  
  handleError(error) {
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {                
      errMsg = `${error.status} - ${error.statusText || ''} - ${error.message}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg); 
  }

}
