import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-member-home-group',
    templateUrl: './member-home-group.component.html',
    styleUrls: ['./member-home-group.component.scss']
})
export class MemberHomeGroupComponent implements OnInit {
    data1 = [
        {
            header: 'Khối 1',
            group: '10 lớp',
            member: '300 thành viên',
            id: 1

        },
        {
            header: 'Khối 2',
            group: '10 lớp',
            member: '300 thành viên',
            id: 2

        },
        {
            header: 'Khối 3',
            group: '10 lớp',
            member: '300 thành viên',
            id: 3
        },
        {
            header: 'Khối 4',
            group: '10 lớp',
            member: '300 thành viên',
            id: 4

        },
        {
            header: 'Khối 5',
            group: '10 lớp',
            member: '300 thành viên',
            id: 5

        },

    ]

    data2 = [
        {
            header: 'Khối 6',
            group: '10 lớp',
            member: '300 thành viên',
            id: 6

        },
        {
            header: 'Khối 7',
            group: '10 lớp',
            member: '300 thành viên',
            id: 7

        },
        {
            header: 'Khối 8',
            group: '10 lớp',
            member: '300 thành viên',
            id: 8

        },
        {
            header: 'Khối 9',
            group: '10 lớp',
            member: '300 thành viên',
            id: 9

        },
    ]

    data3 = [
        {
            header: 'Khối 10',
            group: '10 lớp',
            member: '300 thành viên',
            id: 10

        },
        {
            header: 'Khối 11',
            group: '10 lớp',
            member: '300 thành viên',
            id: 11

        },
        {
            header: 'Khối 12',
            group: '10 lớp',
            member: '300 thành viên',
            id: 12

        },
    ]


    data = [];

    header: any;
    constructor(private getrouter: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.header = this.getrouter.snapshot.params.id;
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
        this.router.navigate(['/member/member-home-class', { id: ev.id }])
        console.log(ev);
    }
}
