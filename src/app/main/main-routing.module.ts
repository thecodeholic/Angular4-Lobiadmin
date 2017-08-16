import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {NavigationService} from '../core/components/navigation/navigation.service';
import {NavigationItem} from '../core/components/navigation/navigation-item';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard1', pathMatch: 'full'},
      {path: 'dashboard1', loadChildren: 'app/main/dashboards/dashboard1/dashboard1.module#Dashboard1Module'},
      {path: 'dashboard2', loadChildren: 'app/main/dashboards/dashboard2/dashboard2.module#Dashboard2Module'},
      {path: 'calendar', loadChildren: 'app/main/calendar/calendar.module#CalendarModule'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {

  constructor(service: NavigationService) {

    service.saveItem('main.dashboard', new NavigationItem("Dashboard 1", "/main/dashboard1", "fa fa-dashboard", 1));
    service.saveItem('main.calendar', new NavigationItem("Calendar", "/main/calendar", "fa fa-calendar", 10));

    service.saveQuickLaunchItem('main.calendar', new NavigationItem("Calendar", "/main/calendar", "fa fa-calendar", 10));
  }
}
