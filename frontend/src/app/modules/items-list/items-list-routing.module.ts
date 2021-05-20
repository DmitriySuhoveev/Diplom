import { ItemsListComponent } from './items-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const mainRoutes: Routes = [
    { path: '', component: ItemsListComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
})
export class ItemsListRoutingModule { }
