import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
    selector: 'app-member-home-group',
    templateUrl: './member-home-group.component.html',
    styleUrls: ['./member-home-group.component.scss']
})
export class MemberHomeGroupComponent implements OnInit {
    
    data = [];

    schoolLevelId: any;
    constructor(
        private getrouter: ActivatedRoute,
        private router: Router,
        private levelGradeClassService: SchoolGradeLevelService
    ) {
    }

    ngOnInit() {
        this.schoolLevelId = this.getrouter.snapshot.params.schoolLevelId;
        this.getListGrade();
    }

    routerTo(ev) {
        this.router.navigate([`/main/member/member-home/list-class/${ev.GradeId}`])
    }
    getListGrade(){
        this.levelGradeClassService.getGradeOfLevel(this.schoolLevelId).subscribe(res => {
              this.data = res;
              console.log(res);
              
        })
    }

}
