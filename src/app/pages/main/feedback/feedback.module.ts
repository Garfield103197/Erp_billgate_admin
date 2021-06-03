import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { feedbackRoute } from './feedback.routes';
import { FeedbackComponent } from './feedback.component';
import { FeedbackListTableComponent } from './feedback-list-table/feedback-list-table.component';
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component';



@NgModule({
  declarations: [FeedbackComponent, FeedbackListTableComponent, FeedbackDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(feedbackRoute),
    BaseCardModule,
    TableBaseModule
  ],
  exports: [FeedbackComponent]
})
export class FeedbackModule { }
