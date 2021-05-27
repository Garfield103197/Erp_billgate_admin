import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-member-home',
    templateUrl: './member-home.component.html',
    styleUrls: ['./member-home.component.scss']
})
export class MemberHomeComponent implements OnInit {

    constructor(
        private router: Router,
        private levelService: SchoolGradeLevelService
    ) { }
    listLevel: any = [];
    ngOnInit(): void {
        this.getListLevel();
    }
    routerTo(ev) {
        this.router.navigateByUrl(`/main/member/member-home/list-grade/${ev.SchoolLevelId}`)
    }
    getListLevel() {
        this.levelService.getListLevel().subscribe(res => {
          this.listLevel = res;
        })
    }
}
