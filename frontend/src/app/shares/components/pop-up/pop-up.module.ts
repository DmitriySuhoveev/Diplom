import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from './pop-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GalleryCarouselModule } from '../gallery-carousel/gallery-carousel.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [PopUpComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    NgbRatingModule,
    MatIconModule,
    GalleryCarouselModule,
    MatButtonModule
  ],
  exports: [PopUpComponent]
})
export class PopUpModule { }
