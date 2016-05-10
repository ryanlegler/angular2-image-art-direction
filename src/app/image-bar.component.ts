import { Component } from '@angular/core';
import { ImageSource } from './image-source';
import { ImageService } from './image.service';
import { SourceImage } from './source-image.component';

@Component({
  selector: 'image-bar',
  templateUrl: 'app/image-bar.component.html',
  styleUrls: ['app/scss/angular2-app.component.css'],
  providers: [ImageService],
  directives: [SourceImage]
})

export class ImageBar {
  sourceImages: ImageSource[] = [];
  constructor(
    private ImageService: ImageService) { 
  }
 
  ngOnInit() {
    this.ImageService.getImages()
      .then(images => this.sourceImages = images);
  }
}
