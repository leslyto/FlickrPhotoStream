import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from '../app.component'
import { FormsModule } from '@angular/forms'
import { InfiniteScrollModule } from "ngx-infinite-scroll"
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PhotoFilter } from '../photoFilter'
import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        InfiniteScrollModule,
        HttpClientModule,
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent,
        PhotosComponent,
        PhotoFilter
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
