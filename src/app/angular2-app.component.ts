import { Component } from '@angular/core';
import { ImageSource } from './image-source';
import { ImageService } from './image.service';
import { ImageBar } from './image-bar.component'
import { ImageGrid } from './image-grid.component'

@Component({
  moduleId: module.id,
  selector: 'angular2-app-app',
  templateUrl: 'angular2-app.component.html',
  providers: [ImageService],
  directives: [ImageBar,ImageGrid]
})
export class Angular2AppAppComponent {

}