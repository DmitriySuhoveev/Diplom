import { MatCardModule } from '@angular/material/card';
import { GalleryCarouselComponent } from './gallery-carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [GalleryCarouselComponent],
  imports: [
    CommonModule,
    MatCardModule,
    NgbRatingModule,
    NgbModalModule
  ],
  exports: [GalleryCarouselComponent]
})
export class GalleryCarouselModule { }
