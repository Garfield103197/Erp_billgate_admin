import { Routes } from "@angular/router";
import { NotificationComponent } from "./list-news/notification.component";


export const notiRoute: Routes = [
  {
    path: '',
    component: NotificationComponent,
    children: []
  }
]
