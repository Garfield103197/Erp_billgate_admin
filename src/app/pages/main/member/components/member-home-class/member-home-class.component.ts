import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-member-home-class',
    templateUrl: './member-home-class.component.html',
    styleUrls: ['./member-home-class.component.scss']
})
export class MemberHomeClassComponent implements OnInit {

    data: []
    k1 = [

        {
            header: '6A1',
            group: '10 lớp',
            member: '300 thành viên',
            id: 1

        },
        {
            header: '6A2',
            group: '10 lớp',
            member: '300 thành viên',
            id: 2

        },
        {
            header: '6A3',
            group: '10 lớp',
            member: '300 thành viên',
            id: 3

        },
        {
            header: '6A4',
            group: '10 lớp',
            member: '300 thành viên',
            id: 4

        },

    ]
    constructor(private activeRouter: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activeRouter.snapshot.params.id
        console.log(id);

    }

    routerTo(ev) {
        this.router.navigate(['/member/member-detail'])

    }
}
