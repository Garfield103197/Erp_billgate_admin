import { Routes } from "@angular/router";
import { DocumentGroupDetailComponent } from "./document-group-detail/document-group-detail.component";
import { DocumentGroupTableComponent } from "./document-group-table/document-group-table.component";
import { DocumentGroupComponent } from "./document-group/document-group.component";
import { DocumentComponent } from "./document.component";


export const documentRoute: Routes = [
    {
        path: '',
        component: DocumentComponent,
        children: [
            {
                path: 'list-grade',
                component: DocumentGroupComponent,
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
                redirectTo: 'list-grade',
                pathMatch: 'full'
            }
        ]
    }
]
