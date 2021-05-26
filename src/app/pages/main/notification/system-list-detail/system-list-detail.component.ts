import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-list-detail',
  templateUrl: './system-list-detail.component.html',
  styleUrls: ['./system-list-detail.component.scss']
})
export class SystemListDetailComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  list1 = [
    {
        Name: 'Lớp 6A1',
        ClassCount: '1 lớp',
        StudentCount: '30 thành viên',
        ClassId: 1
    },
    {
      Name: 'Lớp 6A2',
      ClassCount: '1 lớp',
      StudentCount: '30 thành viên',
      ClassId: 1
  },
  {
    Name: 'Lớp 6A3',
    ClassCount: '1 lớp',
    StudentCount: '30 thành viên',
    ClassId: 1
},
]

  ngOnInit(): void {
  }
  callback(ev){
      this.router.navigateByUrl(`/main/notification/system-list-table/class/${ev.ClassId}`)
  }

}
