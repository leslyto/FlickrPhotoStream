import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { PhotosComponent } from './photos/photos.component'
import { FormsModule } from '@angular/forms'
import { InfiniteScrollModule } from "ngx-infinite-scroll"
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PhotoFilter } from './photoFilter'

describe('AppComponent', () => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
