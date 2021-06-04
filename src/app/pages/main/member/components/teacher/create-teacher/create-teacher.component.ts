import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'Thêm giáo viên mới',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Xác nhận'
  },
  ];
  listCreate = [];

  ngOnInit(): void {
    this.listCreate = this.conFig.createTeacher;
  }
  handleCallbackEvent(ev) {
    console.log(ev);
    if (ev.btn.class === 'btn-cancel') {
       this.dialogRef.close(null);
    }
    if (ev.btn.class === 'btn-save') {
       this.dialogRef.close(ev.item);
    }
  }
}
