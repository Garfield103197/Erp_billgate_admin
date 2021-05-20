import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  list1 = [
    {
      header: 'Nhà trường',
      group: '3 nhóm',
      member: '3 thành viên',
      id: 1,
    },
  ]

  list2 = [
    {
      header: 'Pre-school',
      group: '10 lớp',
      member: '140 thành viên',
      id: 2,
    },
  ]

  list3 = [
    {
      header: 'Tiểu học ',
      group: '10 lớp',
      member: '300 thành viên',
      id: 3,

    },
    {
      header: 'THCS',
      group: '10 lớp',
      member: '300 thành viên',
      id: 4,
    },
    {
      header: 'THPT',
      group: '10 lớp',
      member: '300 thành viên',
      id: 5,

    },
  ]

  ngOnInit(): void {
  }
  routerTo(ev) {
    this.router.navigateByUrl("/menu/list-menu");
  }
}
