import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { Notification } from 'src/app/models/noti.model';
import { LoaderService } from 'src/app/services/loader.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateMemberComponent>,
    private loaderService: LoaderService,
    @Inject(MAT_DIALOG_DATA) public data,
    private memberService: MemberService
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
    const model = {
      ClassName: this.data.Name,
      ClassId: this.data.ClassId
    }
    this.dataModel = model;    
    this.listCreate[4].data = [{
      value: this.data.ClassId,
      name: this.data.Name,
    }]
    
  }
  handleCallbackEvent(ev) {
       ev.item.StudentGender = +ev.item.StudentGender;
      if(ev.btn.class === "btn-save"){
        this.loaderService.show();
        this.memberService.createStudent(ev.item).subscribe(res => {
          this.loaderService.hide();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm học sinh thành công!',
            showConfirmButton: false,
            timer: 1500
          })
          this.dialogRef.close();
        }, () => {
          this.loaderService.hide();
        })
        
      }
      if(ev.btn.class === "btn-cancel"){
        this.dialogRef.close();
      }
       
  }
}
