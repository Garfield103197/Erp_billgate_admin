import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-member-home',
    templateUrl: './member-home.component.html',
    styleUrls: ['./member-home.component.scss']
})
export class MemberHomeComponent implements OnInit {
    list1 = [
        {
            header: 'Nhà trường',
            group: '3 nhóm',
            member: '3 thành viên'
        },
    ]

    list2 = [
        {
            header: 'Pre-school',
            group: '10 lớp',
            member: '140 thành viên'
        },
    ]

    list3 = [
        {
            header: 'Tiểu học ',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'THCS',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'THPT',
            group: '10 lớp',
            member: '300 thành viên'
        },

    ]

    constructor() { }

    ngOnInit(): void {
    }

}
