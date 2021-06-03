import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { ClassCreateComponent } from '../class-create/class-create.component';

@Component({
    selector: 'app-member-home-class',
    templateUrl: './member-home-class.component.html',
    styleUrls: ['./member-home-class.component.scss']
})
export class MemberHomeClassComponent implements OnInit {

    data: [];
    constructor(
        private activeRouter: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private schoolLevelGrade: SchoolGradeLevelService
    ) { }
   gradeId;
    ngOnInit() {
        
        this.gradeId = this.activeRouter.snapshot.params.gradeId;
        this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
            this.data = res;
        })
    }
    

   createClass(){
        return this.dialog.open(ClassCreateComponent, {
          width: '500px',
          height: '250px',
        }).afterClosed().subscribe(result => {
            this.schoolLevelGrade.getClassOfGrade(this.gradeId).subscribe(res => {
                this.data = res;
            })
        });
   }
    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/gradeId/${this.gradeId}/class/${ev.ClassId}`])

    }
}
