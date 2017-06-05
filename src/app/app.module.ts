import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {CoreModule} from './core/core.module';
import {Dashboard1Module} from './main/dashboards/dashboard1/dashboard1.module';
import {Dashboard2Module} from './main/dashboards/dashboard2/dashboard2.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BsDropdownModule.forRoot(),

    CoreModule,
    AppRoutingModule,
    MainModule,
    AuthModule,

    Dashboard1Module,
    Dashboard2Module
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
