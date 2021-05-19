import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { scheduleRoute } from './schedule.routes';
import { ScheduleGroupComponent } from './schedule-group/schedule-group.component';
import { ScheduleGroupDetailComponent } from './schedule-group-detail/schedule-group-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';


@NgModule({
    declarations: [ScheduleGroupComponent, ScheduleGroupDetailComponent, ScheduleListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(scheduleRoute),
        BaseCardModule
    ],
    exports: [ScheduleGroupComponent]
})
export class ScheduleModule { }
