import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseCardModule } from 'src/app/components/card/base-card/base-card.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { DocumentComponent } from './document.component';
import { documentRoute } from './document.routes';
import { DocumentGroupComponent } from './document-group/document-group.component';
import { DocumentGroupDetailComponent } from './document-group-detail/document-group-detail.component';
import { DocumentGroupTableComponent } from './document-group-table/document-group-table.component';



@NgModule({
  declarations: [DocumentComponent, DocumentGroupComponent, DocumentGroupDetailComponent, DocumentGroupTableComponent],
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
