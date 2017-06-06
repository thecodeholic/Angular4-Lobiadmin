import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from '../providers/guards/auth.guard';


// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
