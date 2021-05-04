import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(config: NgbCarouselConfig) {
    config.interval = null;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
    }

  ngOnInit(): void {
  }

}
