import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Notification } from 'src/app/models/noti.model';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';
import { CreateNotiComponent } from '../create-noti/create-noti.component';
import { EditNotiComponent } from '../edit-noti/edit-noti.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private notiService: NotificationService
  ) { }
  config = new Notification;
  listActive = [];
  tableData;
  data = [
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 2,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 3,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 4,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 5,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    }
  ];




  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.getListNoti();
  }
  getListNoti() {
    this.notiService.getListAnnounce('').subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
        x.stt = index + 1;
      });
    })
  }
  handleTableCallback(ev) {
    console.log(ev);

    if (ev.type === 'create') {
      return this.dialog.open(CreateNotiComponent, {
        width: '800px',
        height: '500px'
      }).afterClosed().subscribe(result => {
        this.getListNoti();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(EditNotiComponent, {
        width: '800px',
        height: '500px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListNoti();
      });
    }
    if (ev.type === 'noti') {
      this.router.navigateByUrl('/main/notification/system-notification')
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.notiService.deleteNotification(ev.item.AnnouncementId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thông báo thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListNoti();
          })
        }
      })
    }
  }
}
