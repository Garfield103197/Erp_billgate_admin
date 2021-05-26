import { Component, OnInit } from '@angular/core';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-document-group-table',
  templateUrl: './document-group-table.component.html',
  styleUrls: ['./document-group-table.component.scss']
})
export class DocumentGroupTableComponent extends BaseUploadComponent implements OnInit {
  config = new DocumentModel;
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
    public s3Service: S3FileService
  ) {
    super(s3Service)
  }
  linkPreSignedURL;

  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;

  }

  handleTableCallback(ev) {
    this.selectImage(ev).subscribe(res => {
       this.linkPreSignedURL = this.imageLinkUpload;
    });
    
  }


}
