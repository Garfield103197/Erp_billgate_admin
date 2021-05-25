import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ScheduleModel } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  constructor(
    public dialoRef: MatDialogRef<ImportExcelComponent>,
  ) { }
  conFig = new ScheduleModel;
  dataModel = {};
  checkFile = {
    type: 'menu',
    Url: 'assets/files/menu-table.xlsx'
  }
  option = {
    title: 'Import thực đơn',
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
    console.log(ev);
    
      this.dialoRef.close(ev);
       
  }
}
