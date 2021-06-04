import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-school-group-member',
  templateUrl: './school-group-member.component.html',
  styleUrls: ['./school-group-member.component.scss']
})
export class SchoolGroupMemberComponent implements OnInit {

  constructor(
    private router: Router,
    private levelService: SchoolGradeLevelService
  ) { }
  school = [
    {
      Name: "Admin",
    },
    {
      Name: "Giáo vụ",
    },
    {
      Name: "Giáo viên",
    },
  ];

  listLevel: any = [];
  ngOnInit(): void {
    this.getListLevel();
  }
  routerTo(ev) {
    if(ev.Name === 'Giáo viên'){
      this.router.navigateByUrl("/main/member/member-home/school-group-member/teacher");
    }
    if(ev.Name === 'Admin'){
      this.router.navigateByUrl("/main/member/member-home/school-group-member/admin");
    }
  }
  routerSchoolLevel(ev) {
   
   
  }
  getListLevel() {
    this.levelService.getListLevel().subscribe(res => {
      this.listLevel = res;
      console.log(res);

    })
  }

}