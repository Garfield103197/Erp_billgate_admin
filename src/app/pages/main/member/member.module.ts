import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { memberRoute } from "./member.routes";
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { MemberHomeComponent } from './components/member-home/member-home.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberHomeGroupComponent } from './components/member-home-group/member-home-group.component';




@NgModule({
    declarations: [MemberComponent, MemberHomeComponent, MemberDetailComponent, MemberHomeGroupComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(memberRoute),
        BaseCardModule
    ],
    exports: [MemberComponent]
})
export class MemberModule { }
