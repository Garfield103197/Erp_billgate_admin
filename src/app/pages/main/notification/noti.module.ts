import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './list-news/notification.component';
import { notiRoute } from './noti.routes';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateNotiComponent } from './create-noti/create-noti.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';




@NgModule({
  declarations: [NotificationComponent, CreateNotiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notiRoute),
    TableBaseModule,
    CreateFormModule
  ],
  exports: [NotificationComponent]
})
export class NotiModule { }
