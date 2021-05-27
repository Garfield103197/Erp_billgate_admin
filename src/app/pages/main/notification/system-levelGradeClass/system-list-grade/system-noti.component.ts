import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-system-noti',
    templateUrl: './system-noti.component.html',
    styleUrls: ['./system-noti.component.scss']
})
export class SystemNotiComponent implements OnInit {

    constructor( 
        private router: Router,
        private schoolGradeLevel: SchoolGradeLevelService,
        private activeRouter: ActivatedRoute
    ) { }
    data = [];
    ngOnInit(): void {
        const schooleLevelId = this.activeRouter.snapshot.params.schoolLevelId;        
        this.schoolGradeLevel.getGradeOfLevel(schooleLevelId).subscribe(res => {
            this.data = res;
          })
    }
   callback(ev){
      this.router.navigateByUrl(`/main/notification/system-notification/list-class/${ev.GradeId}`)
   }
}
