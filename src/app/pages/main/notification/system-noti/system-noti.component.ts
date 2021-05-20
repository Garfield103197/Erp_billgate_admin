import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-noti',
    templateUrl: './system-noti.component.html',
    styleUrls: ['./system-noti.component.scss']
})
export class SystemNotiComponent implements OnInit {

    constructor() { }
    list1 = [
        {
            header: 'Mầm non',
            group: '3 lớp',
            member: '30 thành viên'
        },
    ]

    list2 = [
        {
            header: 'Khối 1',
            group: '10 lớp',
            member: '140 thành viên'
        },
        {
            header: 'Khối 2',
            group: '10 lớp',
            member: '140 thành viên'
        },
        {
            header: 'Khối 3',
            group: '10 lớp',
            member: '140 thành viên'
        },
        {
            header: 'Khối 4',
            group: '10 lớp',
            member: '140 thành viên'
        },
        {
            header: 'Khối 5',
            group: '10 lớp',
            member: '140 thành viên'
        },
    ]

    list3 = [
        {
            header: 'Khối 6 ',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'Khối 7',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'Khối 8',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'Khối 9',
            group: '10 lớp',
            member: '300 thành viên'
        },
    ]

    highSchool = [
        {
            header: 'Khối 10',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'Khối 11',
            group: '10 lớp',
            member: '300 thành viên'
        },
        {
            header: 'Khối 12',
            group: '10 lớp',
            member: '300 thành viên'
        },
    ]
    ngOnInit(): void {
    }

}
