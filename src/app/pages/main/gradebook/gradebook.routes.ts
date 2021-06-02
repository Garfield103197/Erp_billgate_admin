import { Routes } from "@angular/router";
import { GradebookClassComponent } from "./gradebook-levelGradeClass/gradebook-class/gradebook-class.component";
import { GradebookGradeComponent } from "./gradebook-levelGradeClass/gradebook-grade/gradebook-grade.component";
import { GradebookLevelComponent } from "./gradebook-levelGradeClass/gradebook-level/gradebook-level.component";
import { GradebookTableComponent } from "./gradebook-table/gradebook-table.component";

import { GradebookComponent } from "./gradebook.component";

export const gradeBookRoute: Routes = [
    {
        path: '',
        component: GradebookComponent,
        children: [
            {
                path: 'gradebook-level',
                component: GradebookLevelComponent
            },
            {
                path: 'gradebook-grade/level/:schoolLevelId',
                component: GradebookGradeComponent
            },
            {
                path: 'gradebook-class/grade/:gradeId',
                component: GradebookClassComponent
            },
            {
                path: 'gradebook-table/grade/:gradeId/class/:classId',
                component: GradebookTableComponent
            },
            {
                path: '',
                redirectTo: 'gradebook-level',
                pathMatch: 'full'
            }
        ]
    }
]
