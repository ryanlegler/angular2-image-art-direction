import { Component, ElementRef , OnInit} from '@angular/core';
import { NgStyle} from '@angular/common';
import { ImageSource } from './image-source';
import { ImageService } from './image.service';


@Component({
  selector: 'grid-image',
  templateUrl: 'app/grid-image.component.html',
  styleUrls: ['app/scss/angular2-app.component.css'],
  inputs: ['image'],
  directives: [NgStyle]
})

export class GridImage {

  constructor (
    private elementRef: ElementRef,
    private ImageService: ImageService
    ) {
    // private elementRef: ElementRef,private ImageService: ImageService) {
  }

}
