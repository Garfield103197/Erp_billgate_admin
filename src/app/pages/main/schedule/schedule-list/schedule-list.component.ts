import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ExportFileExcelService } from 'src/app/services/export-file-excel.service';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import Swal from 'sweetalert2';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private exportService: ExportFileExcelService,
    private router: ActivatedRoute,
    private scheduleService: ScheduleService,
    private formatDate: FormatDateService,
    private schoolGradeLevel: SchoolGradeLevelService
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  arrayBuffer: any;
  file: File;
  dataImport: any = [];
  dataSchedule = [];
  dataExport = [];
  classId: number;
  today; string;
  model = {};
  detailClass: any;
  modelEdit: any = [];
  listSubject: any[];
  currentSemester: any[];
  schoolYear = new Date().getFullYear();
  ngOnInit(): void {
    window.onbeforeunload = function () {
      return 'Are you sure you want to leave?';
    };
    this.classId = +this.router.snapshot.params.classId;
    const gradeId = +this.router.snapshot.params.gradeId;
    this.today = this.formatDate.formatDate(new Date(), 'YYYY-MM-DD');
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
          checkSelectSubject: false,
        }
      })
    });
    this.schoolGradeLevel.getClassOfGrade(gradeId).subscribe(res => {
         this.detailClass = res.find(x => x.ClassId === this.classId);
    })
    this.getTimeTable();
    this.getListSubject();
    this.getSemester();
  }
  getSemester(){
    this.scheduleService.getListSemester().subscribe(res => {
       
       res.forEach(x => {
         x.year =  new Date(x.StartDate).getFullYear();
         x.startTime = new Date(x.StartDate).getTime();
         x.endTime = new Date(x.EndDate).getTime();
         x.start = this.formatDate.formatDate(x.StartDate, 'DD/MM/YYYY');
         x.end = this.formatDate.formatDate(x.EndDate, 'DD/MM/YYYY');
       })
       this.currentSemester = res.filter(x => x.year === this.schoolYear);
       console.log(this.currentSemester);
    })
  }

  getTimeTable(){
    this.scheduleService.getScheduleOfClass(this.classId, this.today).subscribe(res => {
      this.dataSchedule = res;
    })
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
        this.handleData(this.dataImport, item);
      }
      fileReader.readAsArrayBuffer(this.file);
    }

  }
  handleData(data, item){
    this.dataExport = data;
    this.dataSchedule = data.map(x => {
      return {
        "LessonId": x['Tiết'],
        "ListSubjects": [
          {
            "DayValue": 1,
            "SubjectName": x['Thứ 2'] || null,
            "TeacherName": x['__EMPTY_1'] || null,
            "RoomName": x['__EMPTY'] || null
          },
          {
            "DayValue": 2,
            "SubjectName": x['Thứ 3'] || null,
            "TeacherName": x['__EMPTY_3'] || null,
            "RoomName": x['__EMPTY_2'] || null
          },
          {

            "DayValue": 3,
            "SubjectName": x['Thứ 4'] || null,
            "TeacherName": x['__EMPTY_5'] || null,
            "RoomName": x['__EMPTY_4'] || null
          },
          {

            "DayValue": 4,
            "SubjectName": x['Thứ 5'] || null,
            "TeacherName": x['__EMPTY_7'] || null,
            "RoomName": x['__EMPTY_6'] || null
          },
          {

            "DayValue": 5,
            "SubjectName": x['Thứ 6'] || null,
            "TeacherName": x['__EMPTY_9'] || null,
            "RoomName": x['__EMPTY_8'] || null
          },
          {

            "DayValue": 6,
            "SubjectName": x['Thứ 7'] || null,
            "TeacherName": x['__EMPTY_11'] || null,
            "RoomName": x['__EMPTY_10'] || null
          }
        ]
      }
    })
    this.model = {
      ClassId: this.classId,
      StartDate: item.date,
      LessonList: this.dataSchedule
    }
    const date = new Date(item.date).getTime();
    if( date >= this.currentSemester[0].startTime && date <=  this.currentSemester[0].endTime || date >= this.currentSemester[1].startTime && date <=  this.currentSemester[1].endTime){
      console.log(this.currentSemester[0].startTime , date, this.currentSemester[0].endTime);
      
      this.scheduleService.uploadTimeTableLesson(this.model).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Upload thời khoá biểu thành công!',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    else{
      this.getTimeTable();
      Swal.fire({
        title: 'Vui lòng chọn lại ngày áp dụng!',
        text: `
             Học kì 1 từ ${this.currentSemester[0].start} => ${this.currentSemester[0].end}
             &&
             Học kì 2 từ ${this.currentSemester[1].start} => ${this.currentSemester[1].end}
        `,
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Huỷ'
      }).then((result) => {
        this.getTimeTable();
      })
    }
   
  }
  getListSubject(){
    this.scheduleService.getListSubject().subscribe(res => {
      this.listSubject = res;
    });
  }
  onChange(item){
    item.checkSelectSubject = true;
  }

  buttonSaveChange(){
    this.modelEdit.length = 0;
    this.dataSchedule.forEach(x => {
      if(x.ListSubjects !== null){
        x.ListSubjects.forEach(i => {
          if(i.checkTeacher === true || i.checkSubject === true || i.checkSelectSubject === true)
            this.modelEdit.push(i);
        });
      }
    });
    this.scheduleService.editMultiTimeTable(this.modelEdit).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cập nhật thời khoá biểu thành công!',
        showConfirmButton: false,
        timer: 1500
      })
       this.modelEdit.forEach(x => {
        x.checkTeacher = false,
        x.checkSubject = false,
        x.checkSelectSubject = false
       });
    })
  }
  upload() {
    return this.dialog.open(ImportScheduleComponent, {
      width: '800px',
      height: '400px',
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
