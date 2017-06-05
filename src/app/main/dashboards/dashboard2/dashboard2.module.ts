import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard2RoutingModule } from './dashboard2-routing.module';
import { Dashboard2Component } from './dashboard2.component';

@NgModule({
  imports: [
    CommonModule,
    Dashboard2RoutingModule
  ],
  declarations: [Dashboard2Component]
})
export class Dashboard2Module { }
