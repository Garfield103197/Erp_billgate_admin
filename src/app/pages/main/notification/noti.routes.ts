import { Routes } from "@angular/router";
import { NotificationComponent } from "./list-noti/notification.component";


export const notiRoute: Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: []
  }
]
