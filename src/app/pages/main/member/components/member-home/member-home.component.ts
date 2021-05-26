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
    list1 = [
        {
            Name: 'Nhà trường',
            ClassCount: '3 nhóm',
            StudentCount: '3 thành viên',
            SchoolLevelId: 1,
        },
    ]

    list2 = [
        {
            Name: 'Mầm Non',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            SchoolLevelId: 2,
        },
    ]

    listLevel = [
        {
            Name: 'Tiểu học',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            SchoolLevelId: 3,
        },
        {
            Name: 'THCS',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            SchoolLevelId: 4,
        },
        {
            Name: 'THPT',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            SchoolLevelId: 5,
        },
    ]
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
