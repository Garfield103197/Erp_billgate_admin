import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit {
  constructor() { }
  imagePath;
  model: any = {};
  ngOnInit(): void {
  }
  save(){

  }
  cancel(){

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
