import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-schedule-group',
    templateUrl: './schedule-group.component.html',
    styleUrls: ['./schedule-group.component.scss']
})
export class ScheduleGroupComponent implements OnInit {
    list2 = [
        {
            Name: 'Khối 1',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 2',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 2
        },
        {
            Name: 'Khối 3',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 3
        },
        {
            Name: 'Khối 4',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 4
        },
        {
            Name: 'Khối 5',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 5
        },
    ]
    highSchool = [
        {
            Name: 'Khối 10',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên'
        },
        {
            Name: 'Khối 11',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên'
        },
        {
            Name: 'Khối 12',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên'
        },
    ]
    constructor(
        private router: Router
    ) { }
    ngOnInit(): void {

    }
    callback(ev){
       console.log(ev);
       this.router.navigateByUrl(`/main/schedule/class/${ev.GradeId}`);
    }

}
