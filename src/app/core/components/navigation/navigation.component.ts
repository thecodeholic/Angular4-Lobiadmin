import { Component, OnInit } from '@angular/core';
import {NavigationItem} from './navigation-item';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  menuItems: Array<NavigationItem> = [];

  constructor(service: NavigationService ) {
    this.menuItems = service.getNavigationItems();
  }

  ngOnInit() {
  }

}
