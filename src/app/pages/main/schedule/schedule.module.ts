import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { ScheduleGroupDetailComponent } from './schedule-levelGradeClass/schedule-list-class/schedule-group-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleComponent } from './schedule.component';
import { scheduleRoute } from './schedule.routes';
import { ImportScheduleComponent } from './import-schedule/import-schedule.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleGroupComponent } from './schedule-levelGradeClass/schedule-list-grade/schedule-group.component';
import { ScheduleLevelComponent } from './schedule-levelGradeClass/schedule-list-level/schedule-level.component';


@NgModule({
    declarations: [ScheduleComponent, ScheduleGroupDetailComponent, ScheduleListComponent, ScheduleGroupComponent, ImportScheduleComponent, ScheduleLevelComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(scheduleRoute),
        BaseCardModule,
        CreateFormModule
    ],
    exports: [ScheduleComponent]
})
export class ScheduleModule { }
