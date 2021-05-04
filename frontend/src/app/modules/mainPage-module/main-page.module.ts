import { GalleryCarouselModule } from './../../shares/components/gallery-carousel/gallery-carousel.module';
import { MainPageService } from './mainPage-service/main-page.service';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main-page-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GridListModule } from '../../shares/components/grid-list/grid-list.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgbCarouselModule,
    FormsModule,
    GridListModule,
    GalleryCarouselModule
  ],
  providers: [MainPageService]
})
export class MainPageModule { }
