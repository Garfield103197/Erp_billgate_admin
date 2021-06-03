import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-feedback-list-table',
  templateUrl: './feedback-list-table.component.html',
  styleUrls: ['./feedback-list-table.component.scss']
})
export class FeedbackListTableComponent implements OnInit {

  config = new Feedback;
  listActive = [];
  tableData;
  data = [
    {
      stt: 1,
      FeedbackId: 1,
      Title: "HÒM THƯ GÓP Ý CỦA TRƯỜNG TIỂU HỌC VĨNH TRỤ",
      CreatedOn: "2021-01-02T00:00:00",
      ClassName: "12A1",
      CreatedByName: "Nguyễn Văn Luyện",
      StatusString: "Đã phản hồi",
      Type: 2,
    },
    {
      stt: 2,
      FeedbackId: 2,
      Title: "HÒM THƯ GÓP Ý CỦA TRƯỜNG TIỂU HỌC VĨNH TRỤ",
      CreatedOn: "2021-01-02T00:00:00",
      ClassName: "12A1",
      CreatedByName: "Nguyễn Văn Luyện",
      StatusString: "Đã phản hồi",
      Type: 2
    },
    {
      stt: 3,
      FeedbackId: 3,
      Title: "HÒM THƯ GÓP Ý CỦA TRƯỜNG TIỂU HỌC VĨNH TRỤ",
      CreatedOn: "2021-01-02T00:00:00",
      ClassName: "12A1",
      CreatedByName: "Nguyễn Văn Luyện",
      StatusString: "Chưa phản hồi",
      Type: 1
    }
  ];
  constructor(
    private router: Router
  ) {

  }
  linkPreSignedURL;
  classId: string;
  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.data = this.data
  }


  handleTableCallback(ev) {
    if (ev.type === 'detail') {
      this.router.navigateByUrl(`/main/feedback/feedback-detail/${ev.item.FeedbackId}`);
    }


  }



}
