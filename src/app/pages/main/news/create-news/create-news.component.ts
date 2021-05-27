import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private newsService: NewsService
  ) { }
  imagePath;
  model: any = {};
  mediaURL: any;
  ngOnInit(): void {
  }
  save() {
    this.newsService.createNews(this.model).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tạo tin tức thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    })
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
      this.mediaURL = reader.result;
      this.model.MediaURL = this.mediaURL.split(',')[1];
    }
  }

}
