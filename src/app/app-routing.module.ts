import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Dashboard1Component} from './main/dashboards/dashboard1/dashboard1.component';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';
import {PageNotFoundModule} from './main/page-not-found/page-not-found.module';
import {AuthModule} from './auth/auth.module';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/auth/auth.module#AuthModule'
  // },
  {path: 'dashboard1', component: Dashboard1Component},
  {path: '', redirectTo: '/dashboard1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    AuthModule,
    PageNotFoundModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
