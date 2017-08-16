/**
 * Created by zura on 4/7/17.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationService} from './components/navigation/navigation.service';
import {ConfigService} from './services/config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [NavigationService, ConfigService]
})
export class CoreModule {
}

