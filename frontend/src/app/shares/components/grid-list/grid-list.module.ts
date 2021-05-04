import { GridListComponent } from './grid-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    NgbRatingModule
  ],
  exports: [GridListComponent]
})
export class GridListModule { }
