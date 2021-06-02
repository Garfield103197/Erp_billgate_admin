import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberModel } from 'src/app/models/member.model';
import { LoaderService } from 'src/app/services/loader.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditMemberComponent>,
    private memberService: MemberService,
    private loaderService: LoaderService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
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
    this.listCreate = this.conFig.detail;
    this.dataModel = this.data;
    this.listCreate[6].data = [{
      value: this.data.ClassId,
      name: this.data.ClassName,
    }];
    this.listCreate[5].data = [{
      value: 1,
      name: "Nam",
    },
    {
      value: 2,
      name: "Nữ",
    }]
    
  }
  handleCallbackEvent(ev) {
    ev.item.StudentGender = +ev.item.StudentGender;
    if (ev.btn.class === "btn-save") {
      this.loaderService.show();
      this.memberService.editStudent(ev.item.StudentId, ev.item).subscribe(res => {
        this.loaderService.hide();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sửa thông tin học sinh thành công!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dialogRef.close();
      }, () => {
        this.loaderService.hide();
      })
    }
    if (ev.btn.class === "btn-cancel") {
      this.dialogRef.close();
    }

  }
}
