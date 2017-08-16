import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {NavigationComponent} from '../core/components/navigation/navigation.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MainRoutingModule} from './main-routing.module';
import {TooltipModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TooltipModule.forRoot()
  ],
  declarations: [MainComponent, NavigationComponent, ToolbarComponent],
})
export class MainModule {
}
