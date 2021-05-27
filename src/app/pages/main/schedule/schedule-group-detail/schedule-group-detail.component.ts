import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-schedule-group-detail',
  templateUrl: './schedule-group-detail.component.html',
  styleUrls: ['./schedule-group-detail.component.scss']
})
export class ScheduleGroupDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevel: SchoolGradeLevelService,
    private activeRouter: ActivatedRoute
  ) { }
  listClass = [
  ];
  gradeId: any;
  ngOnInit(): void {
    this.gradeId = this.activeRouter.snapshot.params.gradeId;
    this.schoolGradeLevel.getClassOfGrade(this.gradeId).subscribe(res => {
      this.listClass = res;
      console.log(res);
    })
  }
  callback(ev){
     this.router.navigateByUrl(`/main/schedule/schedule-list/class/${ev.ClassId}`)
  }
}
