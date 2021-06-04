import { Routes } from "@angular/router";
import { MemberDetailComponent } from "./components/member-list-table/member-list-table.component";
import { MemberHomeClassComponent } from "./components/member-levelGradeClass/member-list-class/member-home-class.component";
import { MemberHomeGroupComponent } from "./components/member-levelGradeClass/member-list-grade/member-home-group.component";
import { MemberHomeComponent } from "./components/member-levelGradeClass/member-list-level/member-home.component";

import { MemberComponent } from './member.component'
import { SchoolGroupMemberComponent } from "./components/member-levelGradeClass/school-group-member/school-group-member.component";
import { TeacherComponent } from "./components/teacher/teacher.component";
import { SchoolGroupAdminComponent } from "./components/school-group-admin/school-group-admin.component";

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
                path: 'member-home/gradeId/:gradeId/class/:classId',
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
                path: 'member-home/school-group-member',
                component: SchoolGroupMemberComponent
            },
            {
                path: 'member-home/school-group-member/teacher',
                component: TeacherComponent
            },
            {
                path: 'member-home/school-group-member/admin',
                component: SchoolGroupAdminComponent
            },
            {
                path: '',
                redirectTo: 'member-home',
                pathMatch: 'full'
            }
        ]
    }
]
