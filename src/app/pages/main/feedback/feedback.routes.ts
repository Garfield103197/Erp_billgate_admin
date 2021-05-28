import { Routes } from "@angular/router";
import { FeedbackListTableComponent } from "./feedback-list-table/feedback-list-table.component";
import { FeedbackComponent } from "./feedback.component";


export const feedbackRoute: Routes = [
    {
        path: '',
        component: FeedbackComponent,
        children: [
            {
                path: 'list-feedback',
                component: FeedbackListTableComponent,
            },
            {
                path: '',
                redirectTo: 'list-feedback',
                pathMatch: 'full'
            }
        ]
    }
]
