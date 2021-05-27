import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-schedule-group',
    templateUrl: './schedule-group.component.html',
    styleUrls: ['./schedule-group.component.scss']
})
export class ScheduleGroupComponent implements OnInit {
    data = [];
    constructor(
        private router: Router,
        private schoolGradeLevel: SchoolGradeLevelService,
        private activeRouter: ActivatedRoute
    ) { }
    ngOnInit(): void {
      const schoolLevelId = this.activeRouter.snapshot.params.schoolLevelId;
      this.schoolGradeLevel.getGradeOfLevel(schoolLevelId).subscribe(res => {
          this.data = res;
      })

    }
    callback(ev){
       console.log(ev);
       this.router.navigateByUrl(`/main/schedule/class/${ev.GradeId}`);
    }

}
