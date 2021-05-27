import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-document-group',
  templateUrl: './document-group.component.html',
  styleUrls: ['./document-group.component.scss']
})
export class DocumentGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService
  ) { }
  data = [];
  ngOnInit(): void {
    this.schoolGradeLevel.getListLevel().subscribe(res => {
      this.data = res;
  })
  }
  callback(ev){
     this.router.navigateByUrl(`/main/document/list-grade/${ev.SchoolLevelId}`)
  }
}
