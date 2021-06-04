import { Component, OnInit } from '@angular/core';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-school-group-admin',
  templateUrl: './school-group-admin.component.html',
  styleUrls: ['./school-group-admin.component.scss']
})
export class SchoolGroupAdminComponent implements OnInit {
  config = new MemberModel;
  listActive = [];
  tableData;
  dataModel = {};
  data = [
    { stt: 1,
      FullName: "Teacher One",
      DOB: '1991-09-04',
      GenderString: "Nữ",
      ClassName: "4A1",
      TeacherPhone: "0987655432",
      Address: "Hà Nội, Việt Nam"
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.tableData = this.config.collumsTeacher;
    this.listActive = this.config.btnActice;
  }
  handleTableCallback(ev) {}


}
