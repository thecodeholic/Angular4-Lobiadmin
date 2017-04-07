/**
 * Created by zura on 4/7/17.
 */

import {Injectable} from '@angular/core';
import {NavigationItem} from './navigation-item';

@Injectable()
export class NavigationService {

  private items: Array<NavigationItem> = [];

  constructor() {
  }

  public addItem(item: NavigationItem) {
    this.items.push(item);
  }
}
