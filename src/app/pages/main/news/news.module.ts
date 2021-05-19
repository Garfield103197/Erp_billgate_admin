import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { NewsComponent } from './list-news/news.component';
import { newsRoute } from './news.routes';
import { CreateNewsComponent } from './create-news/create-news.component';




@NgModule({
  declarations: [NewsComponent, CreateNewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoute),
    TableBaseModule
  ],
  exports: [NewsComponent]
})
export class NewsModule { }
