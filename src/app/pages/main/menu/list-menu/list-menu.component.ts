import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../../schedule/import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  arrayBuffer: any;
  file: File;
  dataImport;
  index;
  listMenuMain = [];
  listMenuSub = [];
  menuData = [
  ]
  listDay = [
    {
      Day: "Thứ hai",
    },
    {
      Day: "Thứ ba",
    },
    {
      Day: "Thứ tư",
    },
    {
      Day: "Thứ năm",
    },
    {
      Day: "Thứ sáu",
    },
    {
      Day: "Thứ bảy",
    }
  ];

  dataExport = [];
  ngOnInit(): void {
  }
  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
  incomingfile(event) {
    let fileReader = new FileReader();
    this.file = event.target.files[0];
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.dataExport = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      this.handleData(this.dataExport);
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  handleData(data){
    console.table(data);
    this.index = data.findIndex(x => x['Món'] === "Món phụ");
    this.listMenuMain = data.splice(0, this.index);
    this.listMenuSub = data;
  }

  
}
