import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main'},
  {path: 'auth', loadChildren: () => import('./modules/auth-module/auth.module')
  .then(m => m.AuthModuleModule)},
  {path: 'main', loadChildren: () => import ('./modules/mainPage-module/main-page/main-page.module')
  .then(m => m.MainPageModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
