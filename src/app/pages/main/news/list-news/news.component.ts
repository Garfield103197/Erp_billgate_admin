import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { Notification } from 'src/app/models/noti.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }
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

  }
}
