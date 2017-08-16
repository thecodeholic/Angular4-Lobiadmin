import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {NavigationComponent} from '../core/components/navigation/navigation.component';
import {ToolbarComponent} from '../core/components/toolbar/toolbar.component';
import {MainRoutingModule} from './main-routing.module';
import {TooltipModule} from 'ngx-bootstrap';
import {MenuToggleDirective} from '../core/directives/menu-toggle.directive';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    TooltipModule.forRoot()
  ],
  declarations: [MainComponent, NavigationComponent, ToolbarComponent, MenuToggleDirective],
})
export class MainModule {
}
