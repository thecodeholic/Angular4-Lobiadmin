import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuard} from '../providers/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard1', pathMatch: 'full' },
      { path: 'dashboard1', loadChildren: 'app/main/dashboards/dashboard1/dashboard1.module#Dashboard1Module' },
      { path: 'dashboard2', loadChildren: 'app/main/dashboards/dashboard2/dashboard2.module#Dashboard2Module' },
      { path: 'calendar', loadChildren: 'app/main/calendar/calendar.module#CalendarModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
