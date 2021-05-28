import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from 'src/app/models/news.model';
import { Notification } from 'src/app/models/noti.model';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2';
import { CreateNewsComponent } from '../create-news/create-news.component';
import { DetailNewsComponent } from '../detail-news/detail-news.component';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private newsService: NewsService
  ) { }
  config = new News; 
  listActive = [];
  tableData; 
  data = [];




  ngOnInit(): void {
    this.tableData = this.config.collums;
    this.listActive = this.config.btnActice;
    this.getListNews();
  }
  getListNews(){
    this.newsService.getListnews(1, 50).subscribe(res => {
       this.data = res;
       this.data.forEach((x, index) => {
          x.stt = index + 1;
       });
    })
  }

  handleTableCallback(ev){
    console.log(ev);
    
    if (ev.type === 'create') {
      return this.dialog.open(CreateNewsComponent, {
        width: '500px',
        height: '750px'
      }).afterClosed().subscribe(result => {
         this.getListNews();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(DetailNewsComponent, {
        width: '500px',
        height: '750px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListNews();
      });
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá tin tức này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.newsService.deleteNews(ev.item.NewsId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá tin tức thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListNews();
          })
        }
      })
    }
  }
}
