import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-gradebook-class',
  templateUrl: './gradebook-class.component.html',
  styleUrls: ['./gradebook-class.component.scss']
})
export class GradebookClassComponent implements OnInit {


  data: [];
  constructor(
      private activeRouter: ActivatedRoute,
      private router: Router,
      private schoolLevelGrade: SchoolGradeLevelService
  ) { }
 gradeId;
  ngOnInit() {
      this.gradeId = this.activeRouter.snapshot.params.gradeId;
      this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
          this.data = res;
      })
  }

  routerTo(ev) {
      this.router.navigate([`/main/gradebook/gradebook-table/grade/${this.gradeId}/class/${ev.ClassId}`])
  }
}
