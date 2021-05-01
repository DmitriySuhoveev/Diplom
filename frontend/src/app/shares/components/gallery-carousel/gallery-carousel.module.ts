import { GalleryCarouselComponent } from './gallery-carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GalleryCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [GalleryCarouselComponent]
})
export class GalleryCarouselModule { }
