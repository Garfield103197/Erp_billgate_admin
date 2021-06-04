import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { CreateMemberComponent } from '../create-member/create-member.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
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
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tableData = this.config.collumsTeacher;
    this.listActive = this.config.btnActice;
  }
  handleTableCallback(ev) {
    if(ev.type === 'create'){
      if (ev.type === 'create') {
        return this.dialog.open(CreateTeacherComponent, {
          width: '500px',
          height: '750px',
        }).afterClosed().subscribe(result => {
        });
      }
    }
  }

}
