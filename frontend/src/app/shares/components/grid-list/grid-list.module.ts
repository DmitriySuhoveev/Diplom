import { GridListComponent } from './grid-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [GridListComponent]
})
export class GridListModule { }
