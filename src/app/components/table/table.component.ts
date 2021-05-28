import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() tableData: any;
    @Input() listActive?: any;
    @Input() btnTableHandel?: any;
    @Output() callback = new EventEmitter<any>();
    @ViewChild('file') clickFile: ElementRef;
    @ViewChild('fileUpload') uploadDoc: ElementRef;
    totalPage: number;
    currentPage: number = 1;
    dataSub = [];
    pageSive = 5;
    file: File;
    arrayBuffer;
    dataImport: any[];
    constructor() { }
   
    ngOnChanges() {
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.currentPage = 1;
        this.onLoadDatePagitor();
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
          console.log(this.dataImport);
          
        }
        fileReader.readAsArrayBuffer(this.file);
      }

    ngOnInit() {
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.onLoadDatePagitor();     
        console.log(this.tableData);
           
    }

    nextPage = () => {
        if (this.currentPage + 1 > this.totalPage) return;
        this.currentPage += 1;
        this.onLoadDatePagitor();
    }

    backPage = () => {
        if (this.currentPage - 1 === 0) return;
        this.currentPage -= 1;
        this.onLoadDatePagitor();
    }

    onLoadDatePagitor = () => {
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
    }

    onClickSetting = (item, type) => {
        this.callback.emit({
            item: item,
            type: type
        })
    }

    onClickBtnActive = (i) => {
        if(i.type === 'create'){
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if(i.type === 'upload'){
            this.clickFile.nativeElement.click();
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if(i.type === 'uploadFile'){
            this.uploadDoc.nativeElement.click();
        }
        if(i.type === 'noti'){
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
       
    }
    chooseFile(event){
        this.callback.emit(event)
        
    }

    handleRouteLink = (item) => {
        this.callback.emit({
            type: 'route',
            item: item
        })
    }
}

@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableBaseModule { }