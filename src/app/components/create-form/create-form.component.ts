import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Output() callback = new EventEmitter<any>();

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
    this.callback.emit(i);
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
      this.callback.emit(this.dataImport);
       console.log(this.dataImport);
       
    }
    fileReader.readAsArrayBuffer(this.file);
  }
}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule { }
