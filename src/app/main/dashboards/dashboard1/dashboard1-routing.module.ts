import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationService} from '../../../core/services/navigation.service';
import {Dashboard1Component} from './dashboard1.component';

const routes: Routes = [
  { path: 'pages/dashboard1', component: Dashboard1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule {

}
