import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-system-noti',
    templateUrl: './system-noti.component.html',
    styleUrls: ['./system-noti.component.scss']
})
export class SystemNotiComponent implements OnInit {

    constructor( 
        private router: Router
    ) { }
    list1 = [
        {
            Name: 'Mầm non',
            ClassCount: '3 lớp',
            StudentCount: '30 thành viên',
            GradeId: 1
        },
    ]

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
            GradeId: 1
        },
        {
            Name: 'Khối 3',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 4',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 5',
            ClassCount: '10 lớp',
            StudentCount: '140 thành viên',
            GradeId: 1
        },
    ]

    list3 = [
        {
            Name: 'Khối 6 ',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 7',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 8',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 9',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
    ]

    highSchool = [
        {
            Name: 'Khối 10',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 11',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
        {
            Name: 'Khối 12',
            ClassCount: '10 lớp',
            StudentCount: '300 thành viên',
            GradeId: 1
        },
    ]
    ngOnInit(): void {
    }
   callback(ev){
      this.router.navigateByUrl(`/main/notification/system-notification/grade/${ev.GradeId}`)
   }
}
