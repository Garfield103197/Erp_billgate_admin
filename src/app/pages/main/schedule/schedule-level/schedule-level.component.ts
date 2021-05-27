import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-schedule-level',
  templateUrl: './schedule-level.component.html',
  styleUrls: ['./schedule-level.component.scss']
})
export class ScheduleLevelComponent implements OnInit {
  data = [];
  constructor(
      private router: Router,
      private schoolGradeLevel: SchoolGradeLevelService,
      private activeRouter: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.schoolGradeLevel.getListLevel().subscribe(res => {
        this.data = res;
        console.log(res);
        
    })

  }
  callback(ev){
     this.router.navigateByUrl(`/main/schedule/grade/${ev.SchoolLevelId}`);
  }


}
