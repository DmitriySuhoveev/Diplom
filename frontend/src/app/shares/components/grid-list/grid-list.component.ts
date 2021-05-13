import { PopUpComponent } from './../pop-up/pop-up.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  @Input() colsNum: string;
  @Input() rowNum: string;
  @Input() id: number;
  @Input() elements = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(externalId: number): void {
      const dialogRef = this.dialog.open(PopUpComponent, {
      width: '1300px',
      height: '700px',
      data: {id: externalId}
    });
  }
}
