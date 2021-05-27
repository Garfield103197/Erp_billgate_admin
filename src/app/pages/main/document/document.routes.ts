import { Routes } from "@angular/router";
import { DocumentGradeComponent } from "./document-levelGradeClass/document-list-grade/document-grade.component";
import { DocumentGroupTableComponent } from "./document-group-table/document-group-table.component";
import { DocumentComponent } from "./document.component";
import { DocumentGroupComponent } from "./document-levelGradeClass/document-list-level/document-group.component";
import { DocumentGroupDetailComponent } from "./document-levelGradeClass/document-list-class/document-group-detail.component";


export const documentRoute: Routes = [
    {
        path: '',
        component: DocumentComponent,
        children: [
            {
                path: 'list-level',
                component: DocumentGroupComponent,
            },
            {
                path: 'list-grade/:schoolLevelId',
                component: DocumentGradeComponent,
            },
            {
                path: 'list-class/:gradeId',
                component: DocumentGroupDetailComponent,
            },
            {
                path: 'list-document/class/:classId',
                component: DocumentGroupTableComponent,

            },
            {
                path: '',
                redirectTo: 'list-level',
                pathMatch: 'full'
            }
        ]
    }
]
