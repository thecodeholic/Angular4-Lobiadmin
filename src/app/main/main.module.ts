import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {Dashboard1Module} from './dashboards/dashboard1/dashboard1.module';

@NgModule({
  imports: [
    CommonModule,
    Dashboard1Module
  ],
  declarations: [MainComponent, NavigationComponent, ToolbarComponent]
})
export class MainModule { }
