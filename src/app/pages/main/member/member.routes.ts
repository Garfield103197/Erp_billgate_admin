import { Routes } from "@angular/router";
import { MemberDetailComponent } from "./components/member-detail/member-detail.component";
import { MemberHomeGroupComponent } from "./components/member-home-group/member-home-group.component";
import { MemberHomeComponent } from "./components/member-home/member-home.component";

import { MemberComponent } from './member.component'

export const memberRoute: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            {
                path: 'member-home',
                component: MemberHomeComponent
            },
            {
                path: 'member-detail',
                component: MemberDetailComponent
            },
            {
                path: 'member-home-group',
                component: MemberHomeGroupComponent
            },
            {
                path: '',
                redirectTo: 'member-home',
                pathMatch: 'full'
            }
        ]
    }
]
