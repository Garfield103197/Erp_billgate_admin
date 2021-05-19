import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../import-schedule/import-schedule.component';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  ngOnInit(): void {
  }

  upload(){
    return this.dialog.open(ImportScheduleComponent, {
      width: '800px',
      height: '500px'
    }).afterClosed().subscribe(result => {
    });
  }

}
