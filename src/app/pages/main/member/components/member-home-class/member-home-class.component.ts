import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

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
        private schoolLevelGrade: SchoolGradeLevelService
    ) { }

    ngOnInit() {
        const gradeId = this.activeRouter.snapshot.params.gradeId;
        this.schoolLevelGrade.getClassOfGrade(gradeId).subscribe(res => {
            this.data = res;
        })
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/class/${ev.ClassId}`])

    }
}
