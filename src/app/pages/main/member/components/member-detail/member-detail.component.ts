import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { News } from 'src/app/models/news.model';
import { CreateMemberComponent } from '../create-member/create-member.component';
import { EditMemberComponent } from '../edit-member/edit-member.component';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-member-detail',
    templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

    config = new MemberModel;
    listActive = [];
    tableData;
    data = [
        {   "stt": 1,
            "FullName": "Trần Quang Minh",
            "DOB": "2021-15-04",
            "Gender": "Nam",
            "ClassName": "6A1",
            "StudentId": "BG1234567",
            "ParentPhone": "123456789",
            "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },
        {   "stt": 2,
            "FullName": "Trần Quang Anh",
            "DOB": "2021-15-04",
            "Gender": "Nam",
            "ClassName": "6A1",
            "StudentId": "BG1234567",
            "ParentPhone": "123456789",
            "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },
        {   "stt": 3,
            "FullName": "Trần Quang Vinh",
            "DOB": "2021-15-04",
            "Gender": "Nam",
            "ClassName": "6A1",
            "StudentId": "BG1234567",
            "ParentPhone": "123456789",
            "Address": "Tòa N03-T7, Khu Ngoại giao đoàn, P. Xuân Tảo, Q. Bắc Từ Liêm, Hà Nội",
        },


    ];
    file: File;
    arrayBuffer;
    dataImport: any[];
    constructor(
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.tableData = this.config.collums;
        this.listActive = this.config.btnActice; 
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
              height: '750px'
            }).afterClosed().subscribe(result => {
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

    }
}
