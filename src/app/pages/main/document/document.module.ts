import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { DocumentComponent } from './document.component';
import { documentRoute } from './document.routes';
import { DocumentGroupTableComponent } from './document-group-table/document-group-table.component';
import { DocumentGradeComponent } from './document-levelGradeClass/document-list-grade/document-grade.component';
import { DocumentGroupComponent } from './document-levelGradeClass/document-list-level/document-group.component';
import { DocumentGroupDetailComponent } from './document-levelGradeClass/document-list-class/document-group-detail.component';



@NgModule({
  declarations: [DocumentComponent, DocumentGroupComponent, DocumentGroupDetailComponent, DocumentGroupTableComponent, DocumentGradeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(documentRoute),
    BaseCardModule,
    BaseCardModule,
    TableBaseModule
  ],
  exports: [DocumentComponent]
})
export class DocumentModule { }
