import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'auth', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'main', redirectTo: '/main', pathMatch: 'full'},
  {path: 'pages', redirectTo: '/pages', pathMatch: 'full'},
  {path: '', redirectTo: '/main/dashboard1', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
