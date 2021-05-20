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
                path: 'document-group',
                component: DocumentGroupComponent,
            },
            {
                path: 'document-group-detail',
                component: DocumentGroupDetailComponent,
            },
            {
                path: 'document-group-table',
                component: DocumentGroupTableComponent,

            },
            {
                path: '',
                redirectTo: 'document-group',
                pathMatch: 'full'
            }
        ]
    }
]
