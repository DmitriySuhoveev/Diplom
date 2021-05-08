import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from './pop-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PopUpComponent],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [PopUpComponent]
})
export class PopUpModule { }
