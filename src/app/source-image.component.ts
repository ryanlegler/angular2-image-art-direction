import { Component, ElementRef , OnInit, HostListener} from '@angular/core';
import { NgStyle} from '@angular/common';
import { ImageSource } from './image-source';
import { ImageService } from './image.service';

@Component({
  selector: 'source-image',
  templateUrl: 'app/source-image.component.html',
  styleUrls: ['app/scss/angular2-app.component.css'],
  inputs: ['image'],
  directives: [NgStyle]
})

export class SourceImage{
  imageDetails: ImageSource
  constructor (
    private elementRef: ElementRef,
    private ImageService: ImageService
    ) {}
    
  checkCoordinates(event, id) {

        var innerImage = this.elementRef.nativeElement.children[0]; 
        this.imageDetails = new ImageSource();

        this.imageDetails.imageOffsetX = (event.offsetX / innerImage.width) * 100;
        this.imageDetails.imageOffsetY = (event.offsetY / innerImage.height) * 100;

        this.ImageService.setCoordinates(id, this.imageDetails.imageOffsetX, this.imageDetails.imageOffsetY);
  }
}