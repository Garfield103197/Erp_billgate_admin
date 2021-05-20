import { Routes } from "@angular/router";
import { FeedbackComponent } from "./feedback.component";


export const feedbackRoute: Routes = [
    {
        path: '',
        component: FeedbackComponent,
        children: [
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
]
