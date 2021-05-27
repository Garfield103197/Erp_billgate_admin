import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DetailNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private newsService: NewsService
  ) { }
  imagePath;
  model: any = {};
  ngOnInit(): void {
    this.model = this.data.item;
  }
  save() {
    this.newsService.editNews(this.data.item.NewsId, this.data.item).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sửa tin tức thành công!',
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
      this.model.MediaURL = reader.result;
    }
  }

}
