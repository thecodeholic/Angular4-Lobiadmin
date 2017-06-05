import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginModule} from './login/login.module';
import {AuthComponent} from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
