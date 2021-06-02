import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-gradebook-grade',
  templateUrl: './gradebook-grade.component.html',
  styleUrls: ['./gradebook-grade.component.scss']
})
export class GradebookGradeComponent implements OnInit {

  data = [];

  schoolLevelId: any;
  constructor(
      private getrouter: ActivatedRoute,
      private router: Router,
      private levelGradeClassService: SchoolGradeLevelService
  ) {
  }

  ngOnInit() {
      this.schoolLevelId = this.getrouter.snapshot.params.schoolLevelId;
      this.getListGrade();
  }

  routerTo(ev) {
      this.router.navigate([`/main/gradebook/gradebook-class/grade/${ev.GradeId}`])
  }
  getListGrade(){
      this.levelGradeClassService.getGradeOfLevel(this.schoolLevelId).subscribe(res => {
            this.data = res;
      })
  }


}
