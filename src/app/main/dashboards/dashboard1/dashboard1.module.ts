import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Dashboard1RoutingModule} from './dashboard1-routing.module';
import {Dashboard1Component} from './dashboard1.component';
import {NavigationService} from '../../../core/services/navigation.service';
import {NavigationItem} from "app/core/services/navigation-item";

@NgModule({
  imports: [
    CommonModule,
    Dashboard1RoutingModule
  ],
  declarations: [Dashboard1Component]
})
export class Dashboard1Module {
  constructor(private navigationService: NavigationService) {
    navigationService.addItem(
      new NavigationItem(
        "Dashboard 1",
        "fa fa-file",
        "dashboard1",
        1
      )
    );
  }
}
