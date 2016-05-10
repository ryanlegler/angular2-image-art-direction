import { Component } from '@angular/core';
import { ImageSource } from './image-source';
import { ImageService } from './image.service';
import { GridImage } from './grid-image.component';

@Component({
  selector: 'image-grid',
  templateUrl: 'app/image-grid.component.html',
  styleUrls: ['app/scss/angular2-app.component.css'],
  providers: [ImageService],
  directives: [GridImage]
})

export class ImageGrid {
  gridImages: ImageSource[] = [];
  gridImagesCount: any;
  
  constructor (
    private ImageService: ImageService) { 
  }
  ngOnInit() {
    this.gridImagesCount = ["1","2","3","4","5","6"];
    this.ImageService.getImages()
      .then(images => this.gridImages = images);
  }
}

