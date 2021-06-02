import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-document-group-detail',
  templateUrl: './document-group-detail.component.html',
  styleUrls: ['./document-group-detail.component.scss']
})
export class DocumentGroupDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private activeRouter: ActivatedRoute
  ) { }
  data = [];
  gradeId: number;
  ngOnInit(): void {
    this.gradeId = +this.activeRouter.snapshot.params.gradeId;
    this.schoolGradeLevel.getClassOfGrade(this.gradeId).subscribe(res => {
      this.data = res;
  })
  }
  callback(ev){
     this.router.navigateByUrl(`/main/document/list-document/grade/${this.gradeId}/class/${ev.ClassId}`)
  }
}
