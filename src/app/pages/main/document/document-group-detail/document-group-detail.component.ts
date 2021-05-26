import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-group-detail',
  templateUrl: './document-group-detail.component.html',
  styleUrls: ['./document-group-detail.component.scss']
})
export class DocumentGroupDetailComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  listClass = [
    {
      Name: 'Lớp 6A1',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 1
    },
    {
      Name: 'Lớp 6A2',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 1
    },
    {
      Name: 'Lớp 6A3',
      ClassCount: '3 lớp',
      StudentCount: '30 thành viên',
      ClassId: 1
    },
  ]
  ngOnInit(): void {
  }
  callback(ev){
    this.router.navigateByUrl(`/main/document/list-document/class/${ev.ClassId}`)
 }

}
