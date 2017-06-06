import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MainRoutingModule} from './main-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  declarations: [MainComponent, NavigationComponent, ToolbarComponent],
})
export class MainModule { }
