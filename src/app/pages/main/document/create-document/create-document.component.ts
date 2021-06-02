import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DocumentModel } from 'src/app/models/document.model';
import { ScheduleModel } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {
  constructor(
    public dialoRef: MatDialogRef<CreateDocumentComponent>,
    
  ) { }
  conFig = new DocumentModel;
  dataModel = {};
  checkFile = {}
  option = {
    title: 'Import tài liệu',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  }, {
    class: 'btn-save',
    text: 'Lưu'
  },
];
  listCreate = [];
  ngOnInit(): void {
      this.listCreate = this.conFig.create;
  }
  handleCallbackEvent(ev) {
    if(ev.btn.class === 'btn-save'){
      if(ev.file) this.dialoRef.close(ev);       
    }
    else{
      this.dialoRef.close();
    }
  }
}
