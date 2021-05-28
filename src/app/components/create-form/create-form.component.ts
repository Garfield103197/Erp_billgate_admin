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

}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule { }
