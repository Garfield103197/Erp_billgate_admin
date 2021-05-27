import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-document-grade',
  templateUrl: './document-grade.component.html',
  styleUrls: ['./document-grade.component.scss']
})
export class DocumentGradeComponent implements OnInit {
  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private activeRouter: ActivatedRoute
  ) { }
  data = [];
  ngOnInit(): void {
    const schoolLevelId = this.activeRouter.snapshot.params.schoolLevelId;
    this.schoolGradeLevel.getGradeOfLevel(schoolLevelId).subscribe(res => {
      this.data = res;
  })
  }
  callback(ev){
     this.router.navigateByUrl(`/main/document/list-class/${ev.GradeId}`)
  }
}
