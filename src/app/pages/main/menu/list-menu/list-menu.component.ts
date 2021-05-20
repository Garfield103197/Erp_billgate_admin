import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../../schedule/import-schedule/import-schedule.component';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

    
  menuData= [
  ]
  ngOnInit(): void {
  }
  upload(){
    // return this.dialog.open(ImportScheduleComponent, {
    //   width: '800px',
    //   height: '500px'
    // }).afterClosed().subscribe(result => {
    // });
  }

}
