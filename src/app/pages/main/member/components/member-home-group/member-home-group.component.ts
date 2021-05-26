import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';

@Component({
    selector: 'app-member-home-group',
    templateUrl: './member-home-group.component.html',
    styleUrls: ['./member-home-group.component.scss']
})
export class MemberHomeGroupComponent implements OnInit {
    data1 = [
        {
            Name: 'Khối 1',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1

        },
        {
            Name: 'Khối 2',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 2

        },
        {
            Name: 'Khối 3',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 3
        },
        {
            Name: 'Khối 4',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 4

        },
        {
            Name: 'Khối 5',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 5

        },

    ]

    data2 = [
        {
            Name: 'Khối 6',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 6

        },
        {
            Name: 'Khối 7',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 7

        },
        {
            Name: 'Khối 8',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 8

        },
        {
            Name: 'Khối 9',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 9

        },
    ]

    data3 = [
        {
            Name: 'Khối 10',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 10

        },
        {
            Name: 'Khối 11',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 11

        },
        {
            Name: 'Khối 12',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 12

        },
    ]


    data = [];

    header: any;
    constructor(
        private getrouter: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.header = this.getrouter.snapshot.params.schoolLevelId;
        console.log(this.header);

        if (this.header == 3) {
            this.data = this.data1
        } else if (this.header == 4) {
            this.data = this.data2
        } else {
            this.data = this.data3
        }
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/list-class/${ev.GradeId}`])
        console.log(ev);
    }
}
