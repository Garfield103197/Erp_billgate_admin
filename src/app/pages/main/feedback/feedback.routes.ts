import { Routes } from "@angular/router";
import { FeedbackDetailComponent } from "./feedback-detail/feedback-detail.component";
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
                path: 'feedback-detail/:feedbackId',
                component: FeedbackDetailComponent,
            },
            {
                path: '',
                redirectTo: 'list-feedback',
                pathMatch: 'full'
            }
        ]
    }
]
