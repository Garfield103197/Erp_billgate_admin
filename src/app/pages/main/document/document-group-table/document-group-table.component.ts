import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { DocumentModel } from 'src/app/models/document.model';
import { DocumentService } from 'src/app/services/document.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import Swal from 'sweetalert2';
import { CreateDocumentComponent } from '../create-document/create-document.component';

@Component({
  selector: 'app-document-group-table',
  templateUrl: './document-group-table.component.html',
  styleUrls: ['./document-group-table.component.scss']
})
export class DocumentGroupTableComponent extends BaseUploadComponent implements OnInit {
  constructor(
    public s3Service: S3FileService,
    private documentService: DocumentService,
    private router: ActivatedRoute,
    private dialog: MatDialog,
    private classLevelService: SchoolGradeLevelService
  ) {
    super(s3Service)
  }
  config = new DocumentModel;
  listActive = [];
  tableData;
  data = [];
  className;
  classId: any;
  gradeId: any;
  ngOnInit(): void {
    this.classId = +this.router.snapshot.params.classId;
    this.gradeId = +this.router.snapshot.params.gradeId;
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.getHomework();
    this.getDetailClass();

  }
  getDetailClass(){
    this.classLevelService.getClassOfGrade(this.gradeId).subscribe(res => {
      this.className = res.find(x => x.ClassId === this.classId).Name;
    })
  }


  getHomework() {
    this.documentService.getHomeWorkOfClass(this.classId, '').subscribe(res => {
      this.data = res.reverse();
      this.data.forEach((x, index) => {
        x.stt = index + 1;
      });
    })
  }

  handleTableCallback(ev) {
    if (ev.type === 'create') {
      return this.dialog.open(CreateDocumentComponent, {
        width: '800px',
        height: '500px'
      }).afterClosed().subscribe(result => {
        if (result) {
          this.multipleUpload(result.file.target.files).subscribe((fileLink) => {
            console.log(fileLink, this.fileLinkList);
          }, err => {
            console.log(err);
          }, () => {
            const model = {
              Title: result.item.Title,
              ClassId: this.classId,
              MediaURLList: this.fileLinkList
            }
            this.documentService.uploadHomeWork(model).subscribe(res => {
              this.getHomework();
            });
          });
        }
      })
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá tài liệu này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.documentService.deleteHomeWork(ev.item.HomeworkId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá tài liệu thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getHomework();
          })
        }
      })
    }

  }


}
