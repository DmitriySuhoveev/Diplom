import { GalleryCarouselModule } from './../../shares/components/gallery-carousel/gallery-carousel.module';
import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './items-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { FooterModule } from '../../shares/components/footer/footer.module';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    ItemsListRoutingModule,
    GalleryCarouselModule,
    MatIconModule,
    FormsModule,
    NgbAccordionModule,
    MatRadioModule,
    FooterModule
  ]
})
export class ItemsListModule { }
