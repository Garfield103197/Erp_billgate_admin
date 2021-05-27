import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-group-menu',
  templateUrl: './group-menu.component.html',
  styleUrls: ['./group-menu.component.scss']
})
export class GroupMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private schoolGradeLevelService: SchoolGradeLevelService
  ) { }
  data: any;
  listLevelSchool: any = [];
  ngOnInit(): void {
    this.getListLevel();
  }
  getListLevel(){
    this.schoolGradeLevelService.getListLevel().subscribe(res => {
      this.listLevelSchool = res;
    })
  }
  routerTo(ev) {
    this.router.navigateByUrl(`/main/menu/list-menu/level/${ev.SchoolLevelId}`);
  }
}
