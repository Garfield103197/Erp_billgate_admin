import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Notification } from 'src/app/models/noti.model';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-noti',
  templateUrl: './edit-noti.component.html',
  styleUrls: ['./edit-noti.component.scss']
})
export class EditNotiComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditNotiComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private notifcationService: NotificationService
  ) { }
  conFig = new Notification;
  dataModel = {};
  option = {
    title: 'Sửa thông báo',
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
  }
  handleCallbackEvent(ev) {

    if (ev.btn.class === "btn-save") {
      this.notifcationService.editNotification(ev.item.AnnouncementId, ev.item).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sửa thông báo thành công!',
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
