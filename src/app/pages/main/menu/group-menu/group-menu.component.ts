import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevelService: SchoolGradeLevelService
  ) { }
  list1 = [
    {
      Name: 'Nhà trường',
      ClassCount: '3 nhóm',
      StudentCount: '3 thành viên',
      id: 1,
      SchoolLevelId: 1
    },
  ]

  list2 = [
    {
      Name: 'Pre-school',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      id: 2,
      SchoolLevelId: 1
    },
  ]

  list3 = [
    {
      Name: 'Tiểu học ',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      id: 3,
      SchoolLevelId: 1

    },
    {
      Name: 'THCS',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      id: 4,
      SchoolLevelId: 1
    },
    {
      Name: 'THPT',
      ClassCount: '10 lớp',
      StudentCount: '300 thành viên',
      id: 5,
      SchoolLevelId: 1
    },
  ]
  listLevelSchool: any = [];
  ngOnInit(): void {
    this.getListLevel();
  }
  getListLevel(){
    this.schoolGradeLevelService.getListLevel().subscribe(res => {
      this.listLevelSchool = res;
    })
  }
  routerTo(ev) {
    this.router.navigateByUrl(`/main/menu/list-menu/level/${ev.SchoolLevelId}`);
  }
}
