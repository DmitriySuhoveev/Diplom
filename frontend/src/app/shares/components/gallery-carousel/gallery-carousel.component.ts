import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './../pop-up/pop-up.component';
@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class GalleryCarouselComponent implements OnInit {

  @Input() items = [];
  @Input() title: string;
  @Input() description: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(externalId: number): void {
    this.dialog.open(PopUpComponent, {
    width: '1300px',
    height: '700px',
    data: {id: externalId}
  });
}
}
