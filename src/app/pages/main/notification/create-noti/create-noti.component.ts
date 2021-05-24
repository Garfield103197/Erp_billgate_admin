import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateModel } from 'src/app/models/base/create.model';
import { Notification } from 'src/app/models/noti.model';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-noti',
  templateUrl: './create-noti.component.html',
  styleUrls: ['./create-noti.component.scss']
})
export class CreateNotiComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNotiComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private notifcationService: NotificationService
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
    console.log(ev);
    
    if (ev.btn.class === "btn-save") {
      this.notifcationService.createNotification(ev.item).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tạo thông báo thành công!',
          showConfirmButton: false,
          timer: 1500
        })
        this.dialogRef.close();
      });

    }
    if (ev.btn.class === "btn-cancel") {
      this.dialogRef.close();
    }
  }
}
