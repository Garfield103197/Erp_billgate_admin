import { Component, OnInit } from '@angular/core';
import { Notification } from "../../../../models/noti.model";
@Component({
  selector: 'app-system-list-table',
  templateUrl: './system-list-table.component.html',
  styleUrls: ['./system-list-table.component.scss']
})
export class SystemListTableComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    this.tableData = this.config.collumsSystem;

  }

  handleTableCallback(ev) {

  }

}
