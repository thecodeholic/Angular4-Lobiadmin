import { Component, OnInit } from '@angular/core';
import {NavigationItem} from './navigation-item';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  showMenuItemIndex: boolean;
  menuItems: Array<NavigationItem> = [];
  quickLaunchItems: Array<NavigationItem> = [];

  constructor(service: NavigationService ) {
    this.showMenuItemIndex = service.showMenuItemIndex;
    this.menuItems = service.getNavigationItems();
    this.quickLaunchItems = service.getQuickLaunchItems();
  }

  ngOnInit() {
  }

}
