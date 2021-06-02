import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-gradebook-table',
  templateUrl: './gradebook-table.component.html',
  styleUrls: ['./gradebook-table.component.scss']
})
export class GradebookTableComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private activeRouter: ActivatedRoute,
    private schoolGradeLevel: SchoolGradeLevelService,
    private scheduleService: ScheduleService,
    private memberService: MemberService
  ) { }
  classId;
  gradeId;
  className;
  listSubject: any[];
  listStudent: any[];
  listTest = [];
  count = 0;
  numberPage = 5;
  totalPage: number;
  currentPage: number = 1;
  data: any[];
//   dataTest = [
//     {
//         "StudentId": 1,
//         "DOB": "1990-01-01",
//         "LastName": "Nguyễn Văn b",
//         "TestResultList": [
//             {
//                 "TestResultId": 22,
//                 "Point": 7.0,
//                 "TestTypeName": "Miệng 1",
//                 "TestTypeId": 1
//             },
//             {
//                 "TestResultId": 23,
//                 "Point": 7.5,
//                 "TestTypeName": "Miệng 2",
//                 "TestTypeId": 2
//             }
//         ]
//     },
//     {
//         "StudentId": 2,
//         "LastName": "Nguyễn Văn a",
//         "DOB": "1996-01-01",
//         "TestResultList": [
//             {
//                 "TestResultId": 29,
//                 "Point": 7.0,
//                 "TestTypeName": "Miệng 1",
//                 "TestTypeId": 1
//             },
//             {
//                 "TestResultId": 30,
//                 "Point": 7.0,
//                 "TestTypeName": "Học kỳ I",
//                 "TestTypeId": 3
//             },
//             {
//                 "TestResultId": 31,
//                 "Point": 7.5,
//                 "TestTypeName": "Miệng 2",
//                 "TestTypeId": 2
//             }
//         ]
//     }
// ]
  ngOnInit(): void {
    this.classId = +this.activeRouter.snapshot.params.classId;
    this.gradeId = +this.activeRouter.snapshot.params.gradeId;

    this.getClassDetail();
    this.getListSubject();
    this.getListStudentOfClass();
  }
  checkValue(ev) {
    console.log(ev);

  }
  clickSave() {
    console.log(this.listTest);
    this.listTest.forEach((x, index) => {
      x.index = index
    });

  }
  delete() {
    this.listTest.forEach((x, index) => {
      if (x.check === true) {
        this.listTest.splice(index, 1);
      }
      else {
        return this.listTest;
      }
    });
    console.log(this.listTest);

  }
  onClick() {
    const model = {
      Name: "Test" + this.count++,
      value: this.count++,
      check: false
    }
    this.listTest.push(model);
  }
  getClassDetail() {
    this.schoolGradeLevel.getClassOfGrade(this.gradeId).subscribe(res => {
      this.className = res.find(x => x.ClassId === this.classId).Name;
    })
  }
  getListSubject() {
    this.scheduleService.getListSubject().subscribe(res => {
      this.listSubject = res;
    });
  }
  getPagination() {
    const a = Math.floor(this.listStudent.length / 5);
    console.log(a);

  }
  getListStudentOfClass() {
    this.memberService.getListStudentClass(this.classId).subscribe(res => {
      this.listStudent = res;
      this.listStudent.forEach((x, index) => {
        x.stt = index + 1;
      });
      this.data = this.listStudent;
      this.totalPage = Math.ceil((this.data.length / this.numberPage));
      this.onLoadDatePagitor();
    })
  }
  nextPage = () => {
    if (this.currentPage + 1 > this.totalPage) return;
    this.currentPage += 1;
    this.onLoadDatePagitor();
  }

  backPage = () => {
    if (this.currentPage - 1 === 0) return;
    this.currentPage -= 1;
    this.onLoadDatePagitor();
  }
  onLoadDatePagitor = () => {
    this.data = this.listStudent.filter((x, ix) => (this.currentPage - 1) * this.numberPage <= ix && ix < this.currentPage * this.numberPage);
  }

}
