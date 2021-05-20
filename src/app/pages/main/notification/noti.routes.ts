import { Routes } from "@angular/router";
import { NotificationComponent } from "./list-noti/notification.component";
import { NotificationMainComponent } from "./notification-main.component";
import { SystemListDetailComponent } from "./system-list-detail/system-list-detail.component";
import { SystemListTableComponent } from "./system-list-table/system-list-table.component";
import { SystemNotiComponent } from "./system-noti/system-noti.component";


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
        component: SystemNotiComponent
      },
      {
        path: 'system-list-detail',
        component: SystemListDetailComponent
      },
      {
        path: 'system-list-table',
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
