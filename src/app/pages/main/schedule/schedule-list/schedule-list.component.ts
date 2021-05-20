import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  dataSchedule = [
    {
      "LessonId": 1,
      "LessonName": "tiết 1",
      "ListSubjects": [
        {
          "DayId": 1,
          "DayName": "thứ 2",
          "SubjectName": "Chào cờ",
          "SubjectId": 1,
          "TeacherName": null
        },
        {
          "DayId": 2,
          "DayName": "thứ 3",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 3,
          "DayName": "thứ 4",
          "SubjectName": "",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 4,
          "DayName": "thứ 5",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 5,
          "DayName": "thứ 6",
          "SubjectName": "",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 6,
          "DayName": "thứ 7",
          "SubjectName": null,
          "SubjectId": 2,
          "TeacherName": null
        }
      ]
    },
    {
      "LessonId": 2,
      "LessonName": "tiết 2",
      "ListSubjects": [
        {
          "DayId": 1,
          "DayName": "thứ 2",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 2,
          "DayName": "thứ 3",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 3,
          "DayName": "thứ 4",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 4,
          "DayName": "thứ 5",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 5,
          "DayName": "thứ 6",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 6,
          "DayName": "thứ 7",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        }
      ]
    },
    {
      "LessonId": 3,
      "LessonName": "tiết 3",
      "ListSubjects": [
        {
          "DayId": 1,
          "DayName": "thứ 2",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 2,
          "DayName": "thứ 3",
          "SubjectName": null,
          "SubjectId": 2,
          "TeacherName": null
        },
        {
          "DayId": 3,
          "DayName": "thứ 4",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 5,
          "DayName": "thứ 5",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 6,
          "DayName": "thứ 6",
          "SubjectName": "Vật lý 10",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 7,
          "DayName": "thứ 7",
          "SubjectName": "Vật lý 10",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        }
      ]
    },
  ]
  listSubject = [
    {
      "SubjectId": 1,
      "SubjectName": "Lịch sử 10",
    },
    {
      "SubjectId": 2,
      "SubjectName": "Toán 10",
    },
    {
      "SubjectId": 3,
      "SubjectName": "Hoá 10",
    },
    {
      "SubjectId": 4,
      "SubjectName": "Sinh học 10",
    },
    {
      "SubjectId": 5,
      "SubjectName": "Vật lý 10",
    }
  ];
  listTeacher = [
    {
      "TeacherId": 1,
      "TeacherName": "Nguyễn Văn A"
    },
    {
      "TeacherId": 2,
      "TeacherName": "Nguyễn Văn B"
    },
    {
      "TeacherId": 3,
      "TeacherName": "Lê Chí Trung"
    },
  ]

  ngOnInit(): void {
  }
  onChange(value, item) {
    item.SubjectName = value;
    console.log(this.dataSchedule);

  }
  upload() {
    return this.dialog.open(ImportScheduleComponent, {
      width: '800px',
      height: '500px'
    }).afterClosed().subscribe(result => {
    });
  }
  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }
  
  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
}
