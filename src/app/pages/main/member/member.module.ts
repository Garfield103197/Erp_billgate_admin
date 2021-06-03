import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { memberRoute } from "./member.routes";
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { MemberHomeComponent } from './components/member-levelGradeClass/member-list-level/member-home.component';
import { MemberDetailComponent } from './components/member-list-table/member-list-table.component';
import { MemberHomeGroupComponent } from './components/member-levelGradeClass/member-list-grade/member-home-group.component';
import { MemberHomeClassComponent } from './components/member-levelGradeClass/member-list-class/member-home-class.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateMemberComponent } from './components/create-member/create-member.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
import { SchoolGroupMemberComponent } from './components/member-levelGradeClass/school-group-member/school-group-member.component';
import { ClassCreateComponent } from './components/member-levelGradeClass/class-create/class-create.component';




@NgModule({
    declarations: [MemberComponent, MemberHomeComponent, MemberDetailComponent, MemberHomeGroupComponent, MemberHomeClassComponent, CreateMemberComponent, EditMemberComponent, SchoolGroupMemberComponent, ClassCreateComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(memberRoute),
        CreateFormModule,
        LoaderModule,
        BaseCardModule,
        TableBaseModule
    ],
    exports: [MemberComponent]
})
export class MemberModule { }
