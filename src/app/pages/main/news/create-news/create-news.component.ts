import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }
  imagePath;
  model: any = {};
  ngOnInit(): void {
  }
  save() {
    this.dialogRef.close(this.model);
  }
  cancel() {
    this.dialogRef.close();
  }

  preview(files) {
    if (files.length === 0)
      return;
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.model.MediaURL = reader.result;
    }
  }

}
