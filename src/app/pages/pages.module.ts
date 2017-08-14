import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';

import { PagesComponent } from './pages.component';


@NgModule({
  imports: [CommonModule, routing],
  declarations: [PagesComponent]
})
export class PagesModule {
}

