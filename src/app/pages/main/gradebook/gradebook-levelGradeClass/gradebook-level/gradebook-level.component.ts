import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-gradebook-level',
  templateUrl: './gradebook-level.component.html',
  styleUrls: ['./gradebook-level.component.scss']
})
export class GradebookLevelComponent implements OnInit {


  constructor(
    private router: Router,
    private levelService: SchoolGradeLevelService
) { }
listLevel: any = [];
ngOnInit(): void {
    this.getListLevel();
}
routerTo(ev) {
    this.router.navigateByUrl(`/main/gradebook/gradebook-grade/level/${ev.SchoolLevelId}`)
}
getListLevel() {
    this.levelService.getListLevel().subscribe(res => {
      this.listLevel = res;
    })
}

}
