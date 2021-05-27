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
  ngOnInit(): void {
    const gradeId = this.activeRouter.snapshot.params.gradeId;
    this.schoolGradeLevel.getClassOfGrade(gradeId).subscribe(res => {
      this.data = res;
  })
  }
  callback(ev){
     this.router.navigateByUrl(`/main/document/list-document/class/${ev.ClassId}`)
  }
}
