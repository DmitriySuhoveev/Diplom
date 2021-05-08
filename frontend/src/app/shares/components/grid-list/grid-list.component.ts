import { PopUpComponent } from './../pop-up/pop-up.component';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  @Input() colsNum: string;
  @Input() rowNum: string;
  @Input() elements = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(id: number): void {
    this.modalService.open(PopUpComponent, { size: 'xl' });
  }
}
