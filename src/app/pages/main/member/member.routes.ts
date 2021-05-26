import { Routes } from "@angular/router";
import { MemberDetailComponent } from "./components/member-detail/member-detail.component";
import { MemberHomeClassComponent } from "./components/member-home-class/member-home-class.component";
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
                path: 'member-home/class/:classId',
                component: MemberDetailComponent
            },
            {
                path: 'member-home/list-grade/:schoolLevelId',
                component: MemberHomeGroupComponent
            },
            {
                path: 'member-home/list-class/:gradeId',
                component: MemberHomeClassComponent
            },
            {
                path: '',
                redirectTo: 'member-home',
                pathMatch: 'full'
            }
        ]
    }
]
