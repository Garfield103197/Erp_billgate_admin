import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ExportFileExcelService } from 'src/app/services/export-file-excel.service';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private exportService: ExportFileExcelService
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  checkActiveInput = false;
  arrayBuffer: any;
  file: File;
  dataImport: any = [];
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
          "SubjectName": "Vật lý",
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
          "SubjectName": "Vật lý",
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
          "SubjectName": "Vật lý",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 2,
          "DayName": "thứ 3",
          "SubjectName": "Vật lý",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 3,
          "DayName": "thứ 4",
          "SubjectName": "Vật lý",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 4,
          "DayName": "thứ 5",
          "SubjectName": "Vật lý",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 5,
          "DayName": "thứ 6",
          "SubjectName": "Vật lý",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 6,
          "DayName": "thứ 7",
          "SubjectName": "Vật lý",
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
          "SubjectName": "Vật lý",
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
          "SubjectName": "Vật lý",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 5,
          "DayName": "thứ 5",
          "SubjectName": "Vật lý",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 6,
          "DayName": "thứ 6",
          "SubjectName": "Vật lý",
          "SubjectId": 1,
          "TeacherName": "Lê Chí Trung"
        },
        {
          "DayId": 7,
          "DayName": "thứ 7",
          "SubjectName": "Vật lý",
          "SubjectId": 2,
          "TeacherName": "Lê Chí Trung"
        }
      ]
    },
  ];
  listSubject = [
    {
      "SubjectId": 1,
      "SubjectName": "Lịch sử",
    },
    {
      "SubjectId": 2,
      "SubjectName": "Toán",
    },
    {
      "SubjectId": 3,
      "SubjectName": "Hoá",
    },
    {
      "SubjectId": 4,
      "SubjectName": "Sinh học",
    },
    {
      "SubjectId": 5,
      "SubjectName": "Vật lý",
    },
    {
      "SubjectId": 6,
      "SubjectName": "Tin học",
    },
    {
      "SubjectId": 7,
      "SubjectName": "Ngữ văn",
    },
    {
      "SubjectId": 8,
      "SubjectName": "Địa lý",
    }

  ];
  listTeacher = [
    {
      "TeacherId": 1,
      "TeacherName": "Nguyễn văn A"
    },
    {
      "TeacherId": 2,
      "TeacherName": "Nguyễn văn B"
    },
    {
      "TeacherId": 3,
      "TeacherName": "Lê Chí Trung"
    },
  ]
  dataExport = [];
  ngOnInit(): void {
    window.onbeforeunload = function () {
      return 'Are you sure you want to leave?';
    };
    this.dataSchedule.forEach(x => {
      x.ListSubjects = x.ListSubjects.map(x => {
        return {
          DayId: x.DayId,
          DayName: x.DayName,
          SubjectName: x.SubjectName,
          SubjectId: x.SubjectId,
          TeacherName: x.TeacherName,
          checkTeacher: false,
          checkSubject: false,
        }
      })
    }) 
  }

  onChange(value, item) {
    item.SubjectName = value;
  }
  incomingfile(event, item) {
    let fileReader = new FileReader();
    if (event) {
      this.file = event.target.files[0];
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        this.dataExport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        this.handleData(this.dataImport);
      }
      fileReader.readAsArrayBuffer(this.file);
    }

  }
  handleData(data){
    this.dataExport = data;
    this.dataSchedule = data.map(x => {
      return {
        "LessonId": x['Tiết'],
        "ListSubjects": [
          {
            "DayName": "Thứ 2",
            "SubjectName": x['Thứ 2'] || null,
            "TeacherName": x['__EMPTY_1'] || null,
            "ClassRoom": x['__EMPTY'] || null
          },
          {
            "DayName": "Thứ 3",
            "SubjectName": x['Thứ 3'] || null,
            "TeacherName": x['__EMPTY_3'] || null,
            "ClassRoom": x['__EMPTY_2'] || null
          },
          {

            "DayName": "Thứ 4",
            "SubjectName": x['Thứ 4'] || null,
            "TeacherName": x['__EMPTY_5'] || null,
            "ClassRoom": x['__EMPTY_4'] || null
          },
          {

            "DayName": "Thứ 5",
            "SubjectName": x['Thứ 5'] || null,
            "TeacherName": x['__EMPTY_7'] || null,
            "ClassRoom": x['__EMPTY_6'] || null
          },
          {

            "DayName": "Thứ 6",
            "SubjectName": x['Thứ 6'] || null,
            "TeacherName": x['__EMPTY_9'] || null,
            "ClassRoom": x['__EMPTY_8'] || null
          },
          {

            "DayName": "Thứ 7",
            "SubjectName": x['Thứ 7'] || null,
            "TeacherName": x['__EMPTY_11'] || null,
            "ClassRoom": x['__EMPTY_10'] || null
          }
        ]
      }
    })
    console.log(this.dataSchedule);
  }
  upload() {
    return this.dialog.open(ImportScheduleComponent, {
      width: '800px',
      height: '500px',
      disableClose: true
    }).afterClosed().subscribe(result => {
      if(result){
        this.incomingfile(result.file, result.item);
      }
    });
  }
  exportExcel(data, fileName) {
    this.exportService.exportExcel(data, fileName);
  }

}
