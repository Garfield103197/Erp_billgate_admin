import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfEmpty } from 'rxjs/operators';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  // @HostListener('window:beforeunload', ['$event'])
  // doSomething($event) {
  //    $event.returnValue='Your data will be lost!';
  // }
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Input() checkFile?: any;
  @Output() callback = new EventEmitter<any>();
  fileImport: any  = {};
  html: '';
  model: any = {};
  imagePath;
  imgURL;
  arrayBuffer: any;
  checkError = false;
  file: File;
  dataImport;
  constructor(
  ) { }

  ngOnInit() {
    this.model = this.dataModel || {};
    console.log(this.model);
    
    this.fileImport = this.checkFile || {};
  }
  fileDownload(url) {
    document.location.href = url;
  }
  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  onCallBackData = () => { }

  onClickButton = (i) => {
    this.callback.emit({
      item: this.model,
      file: this.file,
      btn: i
    });
  }
  incomingfile(event) {
       this.file = event.target.files[0];
    // let fileReader = new FileReader();
    // this.file = event.target.files[0];
    // if(this.file){
    //   fileReader.onload = (e) => {
    //     this.arrayBuffer = fileReader.result;
    //     var data = new Uint8Array(this.arrayBuffer);
    //     var arr = new Array();
    //     for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //     var bstr = arr.join("");
    //     var workbook = XLSX.read(bstr, { type: "binary" });
    //     var first_sheet_name = workbook.SheetNames[0];
    //     var worksheet = workbook.Sheets[first_sheet_name];
    //     this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
    //     this.model.listData = this.dataImport;
    //   }
    //   fileReader.readAsArrayBuffer(this.file);
    // }
    
  }
}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule { }
