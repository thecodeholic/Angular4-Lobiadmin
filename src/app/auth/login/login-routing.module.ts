import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {IsGuest} from '../../providers/guards/is.guest';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [IsGuest]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
