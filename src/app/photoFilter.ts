import { Injectable, Pipe, PipeTransform } from '@angular/core'
import { PhotosComponent } from './photos/photos.component'

@Pipe({
  name: 'photoFilter'
})
@Injectable()

export class PhotoFilter implements PipeTransform {
  transform(photos, args: any[]): any {
    if(!args) 
      return photos
    return photos.filter(photo => {
      return photo.title.toLowerCase().includes(args)
    })
  }
}