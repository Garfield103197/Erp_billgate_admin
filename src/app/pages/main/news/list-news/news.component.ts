import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from 'src/app/models/news.model';
import { Notification } from 'src/app/models/noti.model';
import { CreateNewsComponent } from '../create-news/create-news.component';
import { DetailNewsComponent } from '../detail-news/detail-news.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  config = new News; 
  listActive = [];
  tableData; 
  data = [
    {
      "stt": 1,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh",
      "Link": "https://moet.gov.vn/Pages/ho...",
    },
    {
      "stt": 2,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh",
      "Link": "https://moet.gov.vn/Pages/ho...",
    },
    {
      "stt": 3,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "Link": "https://moet.gov.vn/Pages/ho...",
      "create_person": "Nguyễn Tuấn Anh"
    },
    {
      "stt": 4,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh",
      "Link": "https://moet.gov.vn/Pages/ho...",
    },
    {
      "stt": 5,
      "content": "Tiết Chào cờ toàn trường ngày 10/05/2021 sẽ tổ chức theo lớp",
      "CreatedOn": "08/05/2021",
      "create_person": "Nguyễn Tuấn Anh",
      "Link": "https://moet.gov.vn/Pages/ho...",
    }
  ];




  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
  }
  handleTableCallback(ev){
    if (ev.type === 'create') {
      return this.dialog.open(CreateNewsComponent, {
        width: '500px',
        height: '750px'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(DetailNewsComponent, {
        width: '500px',
        height: '750px'
      }).afterClosed().subscribe(result => {
      });
    }
  }
}
