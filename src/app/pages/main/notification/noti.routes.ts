import { Routes } from "@angular/router";
import { NotificationComponent } from "./list-noti/notification.component";
import { NotificationMainComponent } from "./notification-main.component";
import { SystemListTableComponent } from "./system-list-table/system-list-table.component";
import { SystemNotiLevelComponent } from "./system-levelGradeClass/system-list-level/system-noti-level.component";
import { SystemListDetailComponent } from "./system-levelGradeClass/system-list-class/system-list-detail.component";
import { SystemNotiComponent } from "./system-levelGradeClass/system-list-grade/system-noti.component";

export const notiRoute: Routes = [
  {
    path: '',
    component: NotificationMainComponent,
    children: [
      {
        path: 'list-notification',
        component: NotificationComponent
      },
      {
        path: 'system-notification',
        component: SystemNotiLevelComponent
      },
      {
        path: 'system-notification/list-class/:gradeId',
        component: SystemListDetailComponent
      },
      {
        path: 'system-notification/grade/:schoolLevelId',
        component: SystemNotiComponent
      },
      {
        path: 'system-notification/class/:classId',
        component: SystemListTableComponent
      },
      {
        path: '',
        redirectTo: 'list-notification',
        pathMatch: 'full'
      }
    ]
  }
]
