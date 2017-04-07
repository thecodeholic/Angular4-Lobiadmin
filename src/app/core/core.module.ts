/**
 * Created by zura on 4/7/17.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationService} from './services/navigation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [NavigationService]
})
export class CoreModule { }
