import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { memberRoute } from "./member.routes";




@NgModule({
  declarations: [MemberComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(memberRoute),
  ],
  exports: [MemberComponent]
})
export class MemberModule { }
