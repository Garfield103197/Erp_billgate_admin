import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { News } from 'src/app/models/news.model';
import { CreateMemberComponent } from '../create-member/create-member.component';
import { EditMemberComponent } from '../edit-member/edit-member.component';
import * as XLSX from 'xlsx';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
@Component({
  selector: 'app-member-list-table',
  templateUrl: './member-list-table.component.html',
  styleUrls: ['./member-list-table.component.scss']
})
export class MemberDetailComponent implements OnInit {

  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [
    {
      "StudentId": 1,
      "LastName": "Trần Quang Minh",
      "DOB": "2021-15-04",
      "Gender": "Nam",
      "ClassName": "6A1",
      "Code": "BG1234567",
      "ParentPhone": "123456789",
      "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
    },
    {
      "StudentId": 2,
      "LastName": "Trần Quang Anh",
      "DOB": "2021-15-04",
      "Gender": "Nam",
      "ClassName": "6A1",
      "Code": "BG1234567",
      "ParentPhone": "123456789",
      "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
    },
    {
      "StudentId": 3,
      "LastName": "Trần Quang Vinh",
      "DOB": "2021-15-04",
      "Gender": "Nam",
      "ClassName": "6A1",
      "Code": "BG1234567",
      "ParentPhone": "123456789",
      "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
    },


  ];
  file: File;
  arrayBuffer;
  dataImport: any[];
  classId: number;
  gradeId;
  constructor(
    private dialog: MatDialog,
    private activeRouter: ActivatedRoute,
    private memberService: MemberService,
    private schoolGradeLevel: SchoolGradeLevelService
  ) { }
  classDetail;
  ngOnInit(): void {
    this.classId = +this.activeRouter.snapshot.params.classId;
    this.gradeId = +this.activeRouter.snapshot.params.gradeId;
    this.getListStudentOfClass();
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.schoolGradeLevel.getClassOfGrade(this.gradeId).subscribe(res => {
        this.classDetail = res.find(x => x.ClassId === this.classId);
    })
  }
  getListStudentOfClass() {
    this.memberService.getListStudentClass(this.classId).subscribe(res => {
      this.data = res;
    })
  }
  incomingfile(event) {
    let fileReader = new FileReader();
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
      console.log(this.dataImport);

    }
    fileReader.readAsArrayBuffer(this.file);
  }

  handleTableCallback(ev) {
    console.log(ev);

    if (ev.type === 'create') {
      return this.dialog.open(CreateMemberComponent, {
        width: '500px',
        height: '750px',
        data: this.classDetail
      }).afterClosed().subscribe(result => {
        this.getListStudentOfClass();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(EditMemberComponent, {
        width: '500px',
        height: '750px',
        data: ev.item
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'upload') {

    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá học sinh này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.memberService.deleteStudent(ev.item.StudentId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá học sinh thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListStudentOfClass();
          })
        }
      })
    }
  }
}
