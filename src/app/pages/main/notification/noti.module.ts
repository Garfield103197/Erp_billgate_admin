import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './list-noti/notification.component';
import { notiRoute } from './noti.routes';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateNotiComponent } from './create-noti/create-noti.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { NotificationMainComponent } from './notification-main.component';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { SystemListTableComponent } from './system-list-table/system-list-table.component';
import { SystemNotiLevelComponent } from './system-levelGradeClass/system-list-level/system-noti-level.component';
import { SystemNotiComponent } from './system-levelGradeClass/system-list-grade/system-noti.component';
import { SystemListDetailComponent } from './system-levelGradeClass/system-list-class/system-list-detail.component';
import { EditNotiComponent } from './edit-noti/edit-noti.component';




@NgModule({
  declarations: [NotificationMainComponent, NotificationComponent, CreateNotiComponent, SystemNotiComponent, SystemListDetailComponent, SystemListTableComponent, SystemNotiLevelComponent, EditNotiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notiRoute),
    TableBaseModule,
    BaseCardModule,
    CreateFormModule
  ],
  exports: [NotificationMainComponent]
})
export class NotiModule { }
