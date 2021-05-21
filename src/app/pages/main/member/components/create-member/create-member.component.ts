import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { Notification } from 'src/app/models/noti.model';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'Thêm học sinh mới',
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
    this.listCreate = this.conFig.create;
  }
  handleCallbackEvent(ev) {
      if(ev.class === "btn-save"){
        this.dialogRef.close();
      }
      if(ev.class === "btn-cancel"){
        this.dialogRef.close();
      }
       
  }
}
