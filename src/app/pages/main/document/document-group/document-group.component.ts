import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-group',
  templateUrl: './document-group.component.html',
  styleUrls: ['./document-group.component.scss']
})
export class DocumentGroupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  listGrade = [
    {
      Name: 'Khối 1',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 2',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 3',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 4',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      GradeId: 1
    },
    {
      Name: 'Khối 5',
      ClassCount: '10 lớp',
      StudentCount: '140 thành viên',
      GradeId: 1
    },
  ]

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
  }
  callback(ev){
     this.router.navigateByUrl(`/main/document/list-class/${ev.GradeId}`)
  }
}
