import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-member-home-group',
    templateUrl: './member-home-group.component.html',
    styleUrls: ['./member-home-group.component.scss']
})
export class MemberHomeGroupComponent implements OnInit {
    data = [
        {
            header: 'Khối 6',
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
    constructor() { }

    ngOnInit(): void {
    }

}
