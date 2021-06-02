import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberModule),
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
      },
      {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('./notification/noti.module').then((m) => m.NotiModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'document',
        loadChildren: () =>
          import('./document/document.module').then((m) => m.DocumentModule),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('./feedback/feedback.module').then((m) => m.FeedbackModule),
      },
      {
        path: 'gradebook',
        loadChildren: () =>
          import('./gradebook/gradebook.module').then((m) => m.GradeBookModule),
      },
      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
    ],
  },
];
