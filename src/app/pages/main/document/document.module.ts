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
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CreateFormModule } from 'src/app/components/create-form/create-form.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';



@NgModule({
  declarations: [DocumentComponent, DocumentGroupComponent, DocumentGroupDetailComponent, DocumentGroupTableComponent, DocumentGradeComponent, CreateDocumentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(documentRoute),
    CreateFormModule,
    LoaderModule,
    BaseCardModule,
    TableBaseModule
  ],
  exports: [DocumentComponent]
})
export class DocumentModule { }
