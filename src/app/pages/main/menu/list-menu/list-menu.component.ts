import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../../schedule/import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ImportExcelComponent } from '../import-excel/import-excel.component';
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
      DayValue: "DayValue1"
    },
    {
      Day: "Thứ ba",
      DayValue: "DayValue2"
    },
    {
      Day: "Thứ tư",
      DayValue: "DayValue3"
    },
    {
      Day: "Thứ năm",
      DayValue: "DayValue4"
    },
    {
      Day: "Thứ sáu",
      DayValue: "DayValue5"
    },
    {
      Day: "Thứ bảy",
      DayValue: "DayValue6"
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

  ImportFile() {
    return this.dialog.open(ImportExcelComponent, {
      width: '800px',
      height: '500px'
    }).afterClosed().subscribe(result => {
      if (result) {
        this.handleData(result.item.listData);
      }
    })
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
      console.log(this.dataExport);

      this.handleData(this.dataImport);
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  handleData(data) {
    this.index = data.findIndex(x => x['Món'] === "Món phụ");
    if (this.index > 0) {
      this.listMenuMain = data.splice(0, this.index).map(x => {
        return {
          Type: 1,
          DayValue1: x['Thứ hai'] || null,
          DayValue2: x['Thứ ba'] || null,
          DayValue3: x['Thứ tư'] || null,
          DayValue4: x['Thứ năm'] || null,
          DayValue5: x['Thứ sáu'] || null,
          DayValue6: x['Thứ bảy'] || null,
        }
      });
      this.listMenuSub = data.map(x => {
        return {
          Type: 2,
          DayValue1: x['Thứ hai'] || null,
          DayValue2: x['Thứ ba'] || null,
          DayValue3: x['Thứ tư'] || null,
          DayValue4: x['Thứ năm'] || null,
          DayValue5: x['Thứ sáu'] || null,
          DayValue6: x['Thứ bảy'] || null,
        }
      });
    }

    let model = {
      "SchoolLevelId": 2,
      "StartDate": "2021-05-22",
      "DishMenuList": this.listMenuMain.concat(this.listMenuSub)
    }
    console.log(model);

  }


}
