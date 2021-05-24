import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
 constructor(
  public dialogRef: MatDialogRef<EditMemberComponent>,
  @Inject(MAT_DIALOG_DATA) public data,
 ){}
 conFig = new MemberModel;
  dataModel = {};
  option = {
    title: 'Sửa thông tin học sinh',
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
    this.dataModel = this.data;
    console.log(this.data);
    
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
