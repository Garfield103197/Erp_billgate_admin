import { Routes } from "@angular/router";
import { NewsComponent } from "./list-news/news.component";


export const newsRoute: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: []
  }
]
