import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { gradeBookRoute } from './gradebook.routes';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { GradebookComponent } from './gradebook.component';
import { GradebookLevelComponent } from './gradebook-levelGradeClass/gradebook-level/gradebook-level.component';
import { GradebookGradeComponent } from './gradebook-levelGradeClass/gradebook-grade/gradebook-grade.component';
import { GradebookClassComponent } from './gradebook-levelGradeClass/gradebook-class/gradebook-class.component';
import { GradebookTableComponent } from './gradebook-table/gradebook-table.component';




@NgModule({
    declarations: [GradebookComponent, GradebookLevelComponent, GradebookGradeComponent, GradebookClassComponent, GradebookTableComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(gradeBookRoute),
        CreateFormModule,
        LoaderModule,
        BaseCardModule,
        TableBaseModule
    ],
    exports: [GradebookComponent]
})
export class GradeBookModule { }
