import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';


// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule', },
  {
    path: 'pages',
    component: PagesComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'import/:uploadProcessing/:id', loadChildren: 'app/pages/import/import.module#ImportModule'},
      { path: 'import', loadChildren: 'app/pages/import/import.module#ImportModule'},
      { path: 'compare/:versionId1', loadChildren: 'app/pages/compare/compare.module#CompareModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
