import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleModel } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-import-schedule',
  templateUrl: './import-schedule.component.html',
  styleUrls: ['./import-schedule.component.scss']
})
export class ImportScheduleComponent implements OnInit {

  constructor(
    public dialoRef: MatDialogRef<ImportScheduleComponent>,
  ) { }
  conFig = new ScheduleModel;
  dataModel = {};
  option = {
    title: 'Import Thời khoá biểu',
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
      this.dialoRef.close(ev);
       
  }
}
