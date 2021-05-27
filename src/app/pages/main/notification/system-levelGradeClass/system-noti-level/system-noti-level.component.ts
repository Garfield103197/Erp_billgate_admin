import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-system-noti-level',
  templateUrl: './system-noti-level.component.html',
  styleUrls: ['./system-noti-level.component.scss']
})
export class SystemNotiLevelComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private schoolGradeLevel: SchoolGradeLevelService
  ) { }

  highSchool = [
    {
      Name: 'Khối 10',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 11',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 12',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      GradeId: 1
    },
  ]
  ngOnInit(): void {
    this.schoolGradeLevel.getListLevel().subscribe(res => {
      this.highSchool = res;
    })
  }
  callback(ev) {
    this.router.navigateByUrl(`/main/notification/system-notification/grade/${ev.SchoolLevelId}`)
  }
}
