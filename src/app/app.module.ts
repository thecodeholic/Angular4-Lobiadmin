import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {CoreModule} from './core/core.module';
import {Dashboard1Module} from './modules/dashboards/dashboard1/dashboard1.module';
import {Dashboard2Module} from './modules/dashboards/dashboard2/dashboard2.module';
import {routes} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),

    CoreModule,

    Dashboard1Module,
    Dashboard2Module,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
