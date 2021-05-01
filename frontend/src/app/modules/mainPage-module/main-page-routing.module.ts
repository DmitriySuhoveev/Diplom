import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const mainRoutes: Routes = [
    { path: '', component: MainPageComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
})
export class MainPageRoutingModule { }
