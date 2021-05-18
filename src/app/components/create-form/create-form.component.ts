import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CreateFormComponent],
})
export class CreateFormModule {}
