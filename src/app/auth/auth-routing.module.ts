import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "app/auth/auth.component";

const routes: Routes = [
  {
    path: 'pages',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'dashboard1', pathMatch: 'full' },
      { path: 'login', loadChildren: 'app/auth/login/login.module#LoginModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
