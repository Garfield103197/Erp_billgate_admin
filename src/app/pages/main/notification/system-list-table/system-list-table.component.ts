import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
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

  constructor(
    private router: ActivatedRoute,
    private notiService: NotificationService
  ) { }

  classId;
  ngOnInit(): void {
    this.classId = this.router.snapshot.params.classId;
    this.tableData = this.config.collumsSystem;
    this.getListNotiAuto();

  }

  getListNotiAuto() {
    this.notiService.getListSystemNotiOfClass(this.classId).subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
        x.stt = index + 1;
      });
    })
  }

  handleTableCallback(ev) {

  }

}
