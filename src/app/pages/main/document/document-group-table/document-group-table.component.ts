import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { DocumentModel } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';

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
    public s3Service: S3FileService,
    private documentService: DocumentService,
    private router: ActivatedRoute
  ) {
    super(s3Service)
  }
  linkPreSignedURL;
  classId: string;
  ngOnInit(): void {
    this.classId = this.router.snapshot.params.classId;
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.getHomework();
  }

  getHomework(){
    this.documentService.getHomeWorkOfClass(this.classId, '').subscribe(res => {
     this.data = res;
     this.data.forEach((x, index) => {
         x.stt = index + 1;
     });
    })
  }

  handleTableCallback(ev) {
    this.selectImage(ev).subscribe(res => {
       this.linkPreSignedURL = this.imageLinkUpload;
    });
    
  }


}
