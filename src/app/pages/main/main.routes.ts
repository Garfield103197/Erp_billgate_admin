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
      // {
      //   path: 'product',
      //   loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      // },
      // {
      //   path: 'enterprise',
      //   loadChildren: () =>
      //     import('./enterprise/enterprise.module').then((m) => m.EnterpriseModule),
      // },
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
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
    ],
  },
];
