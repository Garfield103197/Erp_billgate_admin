import { Routes } from "@angular/router";

import { MemberComponent } from './member.component'

export const memberRoute: Routes = [
  {
    path: '',
    component: MemberComponent,
    children: [

    ]
  }
]
