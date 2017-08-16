import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Dashboard1Component} from './dashboard1.component';

const routes: Routes = [
  { path: '', component: Dashboard1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule {

}
