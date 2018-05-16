import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component'
import { PhotosComponent } from './photos/photos.component'
import { PhotoFilter } from './photoFilter'

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoFilter
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
