import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportScheduleComponent } from '../../schedule/import-schedule/import-schedule.component';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ImportExcelComponent } from '../import-excel/import-excel.component';
import { FormatDateService } from 'src/app/services/format-date.service';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EditDishComponent } from '../edit-dish/edit-dish.component';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private formateDate: FormatDateService,
    private menuService: MenuService,
    private activeRouter: ActivatedRoute,
    private schoolGradeLevelService: SchoolGradeLevelService
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  arrayBuffer: any;
  file: File;
  dataImport;
  listMenuMain = [];
  listMenuSub = []
  menuData = []
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
  today: string;
  schoolLevelId: any;
  dataExport = [];
  name: any;
  ngOnInit(): void {
    this.today = this.formateDate.formatDate(new Date(), 'YYYY-MM-DD');
    this.schoolLevelId = +this.activeRouter.snapshot.params.schoolLevelId;
    this.schoolGradeLevelService.getListLevel().subscribe(res => {
      this.name = res.find(x => x.SchoolLevelId === this.schoolLevelId).Name;
    })
    this.getMenuOfLevel();
  }

  getMenuOfLevel() {
    this.menuService.getMenuOfLevel(this.schoolLevelId, this.today).subscribe(res => {
      this.listMenuMain = res.filter(x => x.Type === 1);
      this.listMenuSub = res.filter(x => x.Type === 2);
    })
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
        this.incomingfile(result.file, result.item);

      }
    })
  }

  clickEditDish(item, name) {
    return this.dialog.open(EditDishComponent, {
      width: '800px',
      height: '350px',
      data: {
        item: item,
        DayValue: name
      }
    }).afterClosed().subscribe(result => {
       this.getMenuOfLevel();
    })
  }

  incomingfile(event, item) {
    let fileReader = new FileReader();
    if (event) {
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
        this.handleData(this.dataImport, item);
      }
      fileReader.readAsArrayBuffer(this.file);
    }

  }
  handleData(data, item) {
    const index = data.findIndex(x => x['Món'] === "Món phụ");
    if (index !== -1) {
      const listMenuMain = data.splice(0, index).map(x => {
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
      const listMenuSub = data.map(x => {
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
      let model = {
        "SchoolLevelId": this.schoolLevelId,
        "StartDate": item.date,
        "DishMenuList": listMenuMain.concat(listMenuSub)
      }
      this.menuService.uploadDishMenu(model).subscribe(res => {
        this.getMenuOfLevel();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tải lên file thành công!',
          showConfirmButton: false,
          timer: 1500
        })
      })

    }

  }



}
