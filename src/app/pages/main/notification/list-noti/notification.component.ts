import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/app/models/noti.model';
import { CreateNotiComponent } from '../create-noti/create-noti.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(
    private dialog: MatDialog
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
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh"
    }
  ];




  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
  }
  handleTableCallback(ev){
    if (ev.type === 'create') {
      return this.dialog.open(CreateNotiComponent, {
        width: '800px',
        height: '500px'
      }).afterClosed().subscribe(result => {
      });
    }
  }
}
