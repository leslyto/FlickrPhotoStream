(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <h1> Flickr Photo Stream <small>by Stefan Stoev</small></h1>\n  <app-photos></app-photos>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _photoFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photoFilter */ "./src/app/photoFilter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__["PhotosComponent"],
                _photoFilter__WEBPACK_IMPORTED_MODULE_8__["PhotoFilter"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__["InfiniteScrollModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/photoFilter.ts":
/*!********************************!*\
  !*** ./src/app/photoFilter.ts ***!
  \********************************/
/*! exports provided: PhotoFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFilter", function() { return PhotoFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhotoFilter = /** @class */ (function () {
    function PhotoFilter() {
    }
    PhotoFilter.prototype.transform = function (photos, args) {
        if (!args)
            return photos;
        return photos.filter(function (photo) {
            return photo.title.toLowerCase().includes(args);
        });
    };
    PhotoFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'photoFilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PhotoFilter);
    return PhotoFilter;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo_wrap {\r\n    float: left;\r\n    height: 320px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.photo {\r\n    height: 320px;\r\n    min-width: 280px;\r\n    background-color: rgba(255, 255, 255, 0.06);\r\n    border-radius: 2px;\r\n    padding-top: 15px;\r\n}\r\n\r\n.image_wrap {\r\n    margin: 0 auto;\r\n    width: 280px;\r\n    height: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.photo:hover {\r\n    background-color: rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n.image_wrap img {\r\n    max-width: 280px;\r\n    max-height: 200px;\r\n    cursor: pointer;\r\n}\r\n\r\n.helper {\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.info {\r\n    padding: 5px 20px 5px 20px;\r\n    font-size: 14px;\r\n    word-break: break-word; /*prevent overflow of title text*/\r\n}\r\n\r\n.info a {\r\n    color: #b9b9b9;\r\n}\r\n\r\n.info a:hover {\r\n    color: #b9b9b9;\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.modal-body {\r\n    text-align: center;\r\n}\r\n\r\n.modal-body a {\r\n    color: #b9b9b9;\r\n}\r\n\r\n.modal-header {\r\n    border-bottom: 1px solid #404040;\r\n}\r\n\r\n.modal-footer {\r\n    border-top: 1px solid #404040;\r\n}\r\n\r\n.modal-header, .modal-body, .modal-footer {\r\n    background-color: rgb(51, 51, 51);\r\n}\r\n\r\n.photo_info {\r\n    margin-top: 10px;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/photos/photos.component.html":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Search images from flickr.com -->\r\n  <div class=\"input-group col-12 col-sm-12 col-md-6\">\t\t    \r\n    <input id=\"search-flickr-input\" [(ngModel)]=\"searchWord\" (keyup.enter)=\"getPhotos()\" name=\"searchFlickr\" type=\"text\" class=\"form-control\" placeholder=\"Search flickr...\" required>\r\n    <div class=\"input-group-append\">\r\n      <button id=\"search-flickr-btn\" (click)=\"getPhotos()\" class=\"btn btn-default\">Search flickr</button>\r\n    </div>\r\n  </div>\r\n  <!-- Filter currently loaded photos by title of photo  -->\r\n  <div class=\"input-group col-12 col-sm-12 col-md-4\">\r\n    <div class=\"input-group-prepend\">\r\n      <button class=\"btn btn-default\">Filter</button>\r\n    </div>\r\n    <input [(ngModel)]=\"filterText\" type=\"text\" class=\"form-control\" placeholder=\"Filter photos by title...\">\r\n  </div>\r\n</div>\r\n\r\n<!-- Infinite scroll options -->\r\n<div class=\"search-results\"\r\n    infiniteScroll\r\n    [infiniteScrollDistance]=\"3\"\r\n    [infiniteScrollThrottle]=\"50\"\r\n    (scrolled)=\"onScroll()\">\r\n    \r\n  <div *ngFor=\"let photo of (photos | photoFilter : filterText)\" class=\"photo_wrap col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\r\n    <div class=\"photo\">\r\n      <div class=\"image_wrap\">\r\n        <span class=\"helper\"></span> <!-- Helper class is used to vertically align the image if its height is less than the height of the div -->\r\n          <!-- To optimize performance and content loading display thumbnail size pictures using flickr's API option (320px on longest side) -->\r\n          <!-- Modal opening on click with more detailed information and bigger picture -->\r\n          <img (click)=\"showInfo(content, photo)\" src=\"https://farm{{photo.farm}}.staticflickr.com/{{photo.server}}/{{photo.id}}_{{photo.secret}}_n.jpg\" alt=\"pic\">\r\n      </div>\r\n      <div class=\"info\">\r\n\r\n        <strong> TITLE: </strong>\r\n        <a href=\"https://www.flickr.com/photos/{{photo.owner}}/{{photo.id}}\"> <!-- Link to original size photo in flickr website -->\r\n          <!-- Restrict title length to 70 characters to prevent overflow and show \"N/A\" if the photo has no title -->\r\n          {{ photo.title.length > 70 ? (photo.title | slice:0:70) + '..' : photo.title || \"N/A\" }}\r\n        </a><br>\r\n\r\n        <strong> AUTHOR: </strong> \r\n        <a href=\"https://www.flickr.com/people/{{photo.owner}}/\"> View flickr page</a> <!-- Link to authors flickr page -->\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- If search returns no matches -->\r\n  <div *ngIf=\"(photos | photoFilter : filterText) && (photos | photoFilter : filterText).length === 0\">\r\n    <p>No matches</p>\r\n  </div>\r\n  <div class=\"clear\"></div> <!-- Fix for Infinite scroll  -->\r\n</div>\r\n\r\n<!-- Modal Photo Info -->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" id=\"test\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Photo info</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"https://farm{{photoInfo.photo.farm}}.staticflickr.com/{{photoInfo.photo.server}}/{{photoInfo.photo.id}}_{{photoInfo.photo.secret}}_z.jpg\" class=\"img-fluid\" alt=\"pic\">\r\n      <div class=\"photo_info\">\r\n\r\n        <p><strong>Title: </strong><span>{{photoInfo.photo.title._content }} </span></p>\r\n        \r\n        <p><strong>Description: </strong><span [innerHTML]=\"photoInfo.photo.description._content\"></span></p> <!-- Using html binding because descriptions often return html tags -->\r\n        \r\n        <p><strong>Author: </strong><a href=\"https://www.flickr.com/people/{{photoInfo.photo.owner.nsid}}/\">{{photoInfo.photo.owner.realname ? photoInfo.photo.owner.realname : photoInfo.photo.owner.username }} </a></p>\r\n\r\n        <p><strong>Tags (clickable): </strong><span *ngFor=\"let tag of photoInfo.photo.tags.tag ; let isLast=last\"> \r\n          <a href=\"https://www.flickr.com/photos/tags/{{tag.raw}}\">{{tag.raw}}{{isLast ? '' : ', '}} </a></span> <!-- Added link for tags leading to flickr -->\r\n        </p>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flickr.service */ "./src/app/services/flickr.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(FlickrService, modalService) {
        this.FlickrService = FlickrService;
        this.modalService = modalService;
        this.searchWord = "London"; // default search set to "London" when launching the app for the purpose of presentation
        this.filterText = "";
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.getPhotos();
    };
    PhotosComponent.prototype.getPhotos = function () {
        var _this = this;
        if (this.searchWord !== "") {
            this.FlickrService.getPhotos(this.searchWord)
                .subscribe(function (results) { return _this.loadPhotos(results); }, function (err) { return _this.handleError(err); });
            this.page = 1;
        }
    };
    PhotosComponent.prototype.loadPhotos = function (data) {
        this.photos = data.photos.photo;
    };
    PhotosComponent.prototype.onScroll = function () {
        var _this = this;
        // Getting more photos by querying next page results from flickr
        this.page = this.page + 1;
        this.FlickrService.getPhotos(this.searchWord, this.page)
            .subscribe(function (results) { return _this.appendPhotos(results); }, function (err) { return _this.handleError(err); });
    };
    PhotosComponent.prototype.appendPhotos = function (new_photos) {
        this.photos = this.photos.concat(new_photos.photos.photo);
    };
    PhotosComponent.prototype.showInfo = function (content, photo) {
        var _this = this;
        this.FlickrService.getPhotoInfo(photo)
            .subscribe(function (photoInfo) {
            _this.photoInfo = photoInfo;
            _this.modalService.open(content, { centered: true, size: 'lg' });
        }, function (err) { return _this.handleError(err); });
    };
    PhotosComponent.prototype.checkIfResults = function () {
        return this.photos.length === 0;
    };
    PhotosComponent.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            errMsg = error.status + " - " + (error.statusText || '') + " - " + error.message;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
    };
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flickr_service__WEBPACK_IMPORTED_MODULE_1__["FlickrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.flickrApiUrl = 'https://api.flickr.com/services/rest/'; // URL to flickr search photos API
        this.apiKey = '6f93d9bd5fef5831ec592f0b527fdeff';
        this.queryParams = {
            'api_key': this.apiKey,
            'format': 'json',
            'nojsoncallback': '1',
        };
    }
    FlickrService.prototype.getPhotos = function (searchWord, page) {
        if (page === void 0) { page = 1; }
        this.queryParams['method'] = 'flickr.photos.search';
        this.queryParams['text'] = searchWord;
        this.queryParams['per_page'] = 30;
        this.queryParams['page'] = page;
        return this.http.get(this.flickrApiUrl, { params: this.queryParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FlickrService.prototype.getPhotoInfo = function (photo) {
        this.queryParams['method'] = 'flickr.photos.getInfo';
        this.queryParams['photo_id'] = photo.id;
        return this.http.get(this.flickrApiUrl, { params: this.queryParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FlickrService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // Return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    FlickrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\leslywork\flickrApi2\flickrAPI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map