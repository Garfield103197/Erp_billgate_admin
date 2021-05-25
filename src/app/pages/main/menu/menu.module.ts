import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseCardModule } from "src/app/components/card/base-card/base-card.component";
import { CreateFormModule } from "src/app/components/create-form/create-form.component";
import { TableBaseModule } from "src/app/components/table/table.component";
import { GroupMenuComponent } from "./group-menu/group-menu.component";
import { MenuComponent } from "./menu.component";
import { menuRoute } from "./menu.routes";
import { ListMenuComponent } from './list-menu/list-menu.component';
import { EditDishComponent } from './edit-dish/edit-dish.component';
import { ImportExcelComponent } from './import-excel/import-excel.component';





@NgModule({
    declarations: [MenuComponent, GroupMenuComponent, ListMenuComponent, EditDishComponent, ImportExcelComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(menuRoute),
        BaseCardModule,
        CreateFormModule,
        TableBaseModule
    ],
    exports: [MenuComponent]
})
export class MenuModule { }
