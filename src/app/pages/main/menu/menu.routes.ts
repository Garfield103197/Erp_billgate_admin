import { Routes } from "@angular/router";
import { GroupMenuComponent } from "./group-menu/group-menu.component";

import { MenuComponent } from "./menu.component";

export const menuRoute: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'group-menu',
                component: GroupMenuComponent
            },
            {
                path: '',
                redirectTo: 'group-menu',
                pathMatch: 'full'
            }
        ]
    }
]
