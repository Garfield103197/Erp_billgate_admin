import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-list-detail',
  templateUrl: './system-list-detail.component.html',
  styleUrls: ['./system-list-detail.component.scss']
})
export class SystemListDetailComponent implements OnInit {

  constructor() { }
  list1 = [
    {
        header: 'Lớp 6A1',
        group: '1 lớp',
        member: '30 thành viên'
    },
    {
      header: 'Lớp 6A2',
      group: '1 lớp',
      member: '30 thành viên'
  },
  {
    header: 'Lớp 6A3',
    group: '1 lớp',
    member: '30 thành viên'
},
]

  ngOnInit(): void {
  }


}
