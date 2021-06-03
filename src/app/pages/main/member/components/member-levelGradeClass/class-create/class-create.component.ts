import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.scss']
})
export class ClassCreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClassCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'Thêm lớp mới',
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
    this.listCreate = this.conFig.createClass;
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
  handleDeleteCallBack(ev){
    console.log(ev);
  }
}
