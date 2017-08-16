import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {BsDropdownModule, ModalBackdropComponent, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {AuthModule} from './auth/auth.module';
import {HttpService} from './services/http.service';
import {PagesModule} from './pages/pages.module';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './providers/guards/auth.guard';
import {IsGuest} from './providers/guards/is.guest';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    CoreModule,
    MainModule,
    // AuthModule,
    PagesModule,
    RouterModule,
    ModalModule,

    AppRoutingModule,
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: useFactory,
      deps: [XHRBackend, RequestOptions]
    },
    {provide: APP_BASE_HREF, useValue : '/' },
    // AuthGuard,
    IsGuest
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
  entryComponents: [ModalBackdropComponent]
})
export class AppModule {
}

export function useFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpService(backend, options);
}

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
