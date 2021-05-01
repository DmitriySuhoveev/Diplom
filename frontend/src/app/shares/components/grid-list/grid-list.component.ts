import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  @Input() colsNum: string;
  @Input() rowNum: string;
  @Input() items: string[];
  @Input() elements = [];

  constructor() { }

  ngOnInit(): void {
    console.log(typeof(this.elements));
  }

}
