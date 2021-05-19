import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { ScheduleGroupDetailComponent } from './schedule-group-detail/schedule-group-detail.component';
import { ScheduleGroupComponent } from './schedule-group/schedule-group.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleComponent } from './schedule.component';
import { scheduleRoute } from './schedule.routes';


@NgModule({
    declarations: [ScheduleComponent, ScheduleGroupDetailComponent, ScheduleListComponent, ScheduleGroupComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(scheduleRoute),
        BaseCardModule
    ],
    exports: [ScheduleComponent]
})
export class ScheduleModule { }
