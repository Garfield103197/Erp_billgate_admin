import { Routes } from "@angular/router";
import { ScheduleGroupDetailComponent } from "./schedule-group-detail/schedule-group-detail.component";
import { ScheduleGroupComponent } from "./schedule-group/schedule-group.component";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";
import { ScheduleComponent } from "./schedule.component";

export const scheduleRoute: Routes = [
    {
        path: '',
        component: ScheduleComponent,
        children: [
            {
                path: 'schedule-group',
                component: ScheduleGroupComponent,
            },
            {
                path: 'class/:gradeId',
                component: ScheduleGroupDetailComponent,
            },
            {
                path: 'schedule-list/class/:classId',
                component: ScheduleListComponent,
            },
            {
                path: '',
                redirectTo: 'schedule-group',
                pathMatch: 'full',
              },
        ]
    },
]
