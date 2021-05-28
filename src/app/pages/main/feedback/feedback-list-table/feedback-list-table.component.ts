import { Component, OnInit } from '@angular/core';
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
  data = [];
  constructor(
  ) {

  }
  linkPreSignedURL;
  classId: string;
  ngOnInit(): void {
    this.tableData = this.config.collums;
  }


  handleTableCallback(ev) {
   
    
  }



}
