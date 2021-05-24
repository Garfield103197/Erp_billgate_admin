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
            header: 'Nhà trường',
            group: '3 nhóm',
            member: '3 thành viên',
            id: 1,
        },
    ]

    list2 = [
        {
            header: 'Pre-school',
            group: '10 lớp',
            member: '140 thành viên',
            id: 2,
        },
    ]

    list3 = [
        {
            header: 'Tiểu học ',
            group: '10 lớp',
            member: '300 thành viên',
            id: 3,

        },
        {
            header: 'THCS',
            group: '10 lớp',
            member: '300 thành viên',
            id: 4,
        },
        {
            header: 'THPT',
            group: '10 lớp',
            member: '300 thành viên',
            id: 5,

        },

    ]

    ngOnInit(): void {
        this.getListLevel();
    }
    routerTo(ev) {
        this.router.navigate(['/main/member/member-home-group', { id: ev.id }])
    }
    getListLevel() {
        this.levelService.getListLevel().subscribe(res => {
            console.log(res);
            
        })
    }
}
