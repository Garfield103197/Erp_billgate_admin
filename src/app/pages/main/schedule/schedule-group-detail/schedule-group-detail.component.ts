import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule-group-detail',
  templateUrl: './schedule-group-detail.component.html',
  styleUrls: ['./schedule-group-detail.component.scss']
})
export class ScheduleGroupDetailComponent implements OnInit {

  constructor(
    private scheduleService: ScheduleService,
    private router: Router
  ) { }
  listClass = [
    {
      Name: 'Lớp 6A1',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 1,

    },
    {
      Name: 'Lớp 6A2',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 2,
    },
    {
      Name: 'Lớp 6A3',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 3,
    },
  ]
  ngOnInit(): void {
  }
  callback(ev){
     this.router.navigateByUrl(`/main/schedule/schedule-list/class/${ev.ClassId}`)
  }
}
