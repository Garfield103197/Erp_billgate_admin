import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-system-list-detail',
  templateUrl: './system-list-detail.component.html',
  styleUrls: ['./system-list-detail.component.scss']
})
export class SystemListDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private schoolGradeLevel: SchoolGradeLevelService,
  ) { }
  data = [];
  ngOnInit(): void {
    const gradeId = this.activeRouter.snapshot.params.gradeId;
    this.schoolGradeLevel.getClassOfGrade(gradeId).subscribe(res => {
      this.data = res;
    })

  }
  callback(ev){
      this.router.navigateByUrl(`/main/notification/system-notification/class/${ev.ClassId}`)
  }

}
