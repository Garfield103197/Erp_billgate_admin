import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor() { }
  dataTable = [
    {
      Day: "Thứ 2",
    },
    {
      Day: "Thứ 3",
    },
    {
      Day: "Thứ 4",
    },    {
      Day: "Thứ 5",
    },
    {
      Day: "Thứ 6",
    },    
    {
      Day: "Thứ 7",
    }
  ]
  ngOnInit(): void {
  }

}
