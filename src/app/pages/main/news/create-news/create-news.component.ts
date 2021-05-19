import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

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