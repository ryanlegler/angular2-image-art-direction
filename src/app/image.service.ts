import { Injectable } from '@angular/core';
import { ImageSource } from './image-source';
import { IMAGES } from './mock-images';

@Injectable()

export class ImageService {
  
  ngOnInit() {
    
  }
  getImages() {
    return Promise.resolve(IMAGES);
  }

  getActive(id) {
    var i = IMAGES.length;
    while (i--) {
      if (IMAGES[i].id === id) {
         return Promise.resolve(IMAGES[i]);
      }
    }
   
  }
  
  setCoordinates(id,x,y) {
    var i = IMAGES.length;
    while(i--) {
      if(IMAGES[i].id === id) {
        IMAGES[i].imageOffsetX = x;
        IMAGES[i].imageOffsetY = y;
      }
    }
  }
}
