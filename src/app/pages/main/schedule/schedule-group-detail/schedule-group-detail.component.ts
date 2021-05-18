import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-group-detail',
  templateUrl: './schedule-group-detail.component.html',
  styleUrls: ['./schedule-group-detail.component.scss']
})
export class ScheduleGroupDetailComponent implements OnInit {

  constructor() { }
  listClass = [
    {
      header: 'Lớp 6A1',
      group: '3 lớp',
      member: '30 thành viên'
    },
    {
      header: 'Lớp 6A2',
      group: '3 lớp',
      member: '30 thành viên'
    },
    {
      header: 'Lớp 6A3',
      group: '3 lớp',
      member: '30 thành viên'
    },
  ]
  ngOnInit(): void {
  }

}
