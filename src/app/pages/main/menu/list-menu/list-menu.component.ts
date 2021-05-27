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
    private activeRouter: ActivatedRoute
  ) { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';
  arrayBuffer: any;
  file: File;
  dataImport;
  index;
  listMenuMain = [
    {
      "Type": 1,
      "DayValue1": "Cháo bò rau củ",
      "DayValue2": "Cháo sườn bí đỏ",
      "DayValue3": "Cháo chim câu hạt sen",
      "DayValue4": "Cháo chân gìo rau xanh",
      "DayValue5": "Cháo bò pho mai",
      "DayValue6": "Cháo chim câu hạt sen"
  },
  {
      "Type": 1,
      "DayValue1": "Dưa hấu",
      "DayValue2": "Chuối",
      "DayValue3": "Nước cam tươi",
      "DayValue4": "Xoài",
      "DayValue5": "Sữa chua hoa quả",
      "DayValue6": "Nước cam tươi"
  },
  {
      "Type": 1,
      "DayValue1": "Cháo cá quả thì là\r\n Nemo: Sữa bột Grow Plus +",
      "DayValue2": "Cháo tôm rau xanh/ \r\n Nemo: Sữa bột Grow Plus +",
      "DayValue3": "Cháo bò pho mai/ \r\n Nemo: Sữa bột Grow Plus +",
      "DayValue4": "Cháo gà rau xanh/ \r\n Nemo: Sữa bột Grow Plus +",
      "DayValue5": "Cháo trứng rau xanh\r\n  Nemo: Sữa bột Grow Plus +",
      "DayValue6": "Cháo bò pho mai/ \r\n Nemo: Sữa bột Grow Plus +"
  },
  ];
  listMenuSub = [
    {
      "Type": 2,
      "DayValue1": "Cháo dinh dưỡng",
      "DayValue2": "Cháo vịt đỗ xanh ",
      "DayValue3": "Cháo trai hành răm",
      "DayValue4": "Cháo lươn hành răm",
      "DayValue5": "Cháo thịt đỗ xanh lạc vừng",
      "DayValue6": "Cháo trai hành răm"
  },
  {
      "Type": 2,
      "DayValue1": "Sữa bột Grow Plus +",
      "DayValue2": null,
      "DayValue3": "Sữa bột Grow Plus +",
      "DayValue4": "Sữa bột Grow Plus +",
      "DayValue5": null,
      "DayValue6": "Sữa bột Grow Plus +"
  }
  ];
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
  today: string;
  schoolLevelId: any;
  dataExport = [];
  ngOnInit(): void {
    this.today = this.formateDate.formatDate(new Date(), 'YYYY-MM-DD');
    this.schoolLevelId = this.activeRouter.snapshot.params.schoolLevelId;
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

  clickEditDish(item, name){ 
    return this.dialog.open(EditDishComponent, {
      width: '800px',
      height: '350px',
      data: {
        item: item,
        DayValue: name
      }
    }).afterClosed().subscribe(result => {

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
      this.listMenuMain = data.splice(0, index).map(x => {
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
      let model = {
        "SchoolLevelId": this.schoolLevelId,
        "StartDate": item.date,
        "DishMenuList": this.listMenuMain.concat(this.listMenuSub)
      }
      this.menuService.uploadDishMenu(model).subscribe(res => {
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
