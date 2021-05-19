import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateModel } from 'src/app/models/base/create.model';
import { Notification } from 'src/app/models/noti.model';

@Component({
  selector: 'app-create-noti',
  templateUrl: './create-noti.component.html',
  styleUrls: ['./create-noti.component.scss']
})
export class CreateNotiComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNotiComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  conFig = new Notification;
  dataModel = {};
  option = {
    title: 'Thêm mới thông báo',
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
