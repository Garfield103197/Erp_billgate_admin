import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './list-noti/notification.component';
import { notiRoute } from './noti.routes';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateNotiComponent } from './create-noti/create-noti.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { SystemNotiComponent } from './system-noti/system-noti.component';
import { NotificationMainComponent } from './notification-main.component';




@NgModule({
  declarations: [NotificationMainComponent, NotificationComponent, CreateNotiComponent, SystemNotiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notiRoute),
    TableBaseModule,
    CreateFormModule
  ],
  exports: [NotificationMainComponent]
})
export class NotiModule { }
