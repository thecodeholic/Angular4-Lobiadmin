import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
