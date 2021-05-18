import { Routes } from "@angular/router";
import { ScheduleGroupDetailComponent } from "./schedule-group-detail/schedule-group-detail.component";
import { ScheduleGroupComponent } from "./schedule-group/schedule-group.component";
import { ScheduleListComponent } from "./schedule-list/schedule-list.component";

export const scheduleRoute: Routes = [
    {
        path: '',
        component: ScheduleGroupComponent,
    },
    {
        path: 'schedule-group-detail',
        component: ScheduleGroupDetailComponent,
    },
    {
        path: 'schedule-list',
        component: ScheduleListComponent,
    },
]
