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
            Name: '6A1',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            ClassId: 1

        },
        {
            Name: '6A2',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            ClassId: 2

        },
        {
            Name: '6A3',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            ClassId: 3

        },
        {
            Name: '6A4',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            ClassId: 4

        },

    ]
    constructor(private activeRouter: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        const gradeId = this.activeRouter.snapshot.params.gradeId;
        console.log(gradeId);
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/class/${ev.ClassId}`])

    }
}
