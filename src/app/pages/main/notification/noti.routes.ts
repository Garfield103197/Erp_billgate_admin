import { Routes } from "@angular/router";
import { NotificationComponent } from "./list-noti/notification.component";
import { NotificationMainComponent } from "./notification-main.component";
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
        path: '',
        redirectTo: 'list-notification',
        pathMatch: 'full'
    }
    ]
  }
]
