/**
 * Created by zura on 4/7/17.
 */

import {Injectable} from '@angular/core';
import {NavigationItem} from './navigation-item';

@Injectable()
export class NavigationService {

  showMenuItemIndex: Boolean;

  private navigationItems: Array<NavigationItem> = [];

  constructor() {
  }


  public setShowMenuItemIndex(show) {
    this.showMenuItemIndex = show;
  }

  public saveItem(key, item: NavigationItem) {
    // this._items.push(item);


    if (typeof key !== 'string') {
      // $log.error('First parameter of lobiNavigationService.saveItem must be string');
      return;
    }

    let finalItem = this.findItemByKeyOrCreate(key);

    // item.text = item.translate ? $filter('translate')(item.translate) : item.text;

    Object.assign(finalItem, item);
  }

  public deleteItem(key) {
    let item = this.getItemByKey(key);
    if (item !== null) {
      this.navigationItems.splice(this.navigationItems.indexOf(item), 1);
    }
  }

  sortByWeight() {
    this.navigationItems.sort(function (item1, item2) {
      return item1.weight - item2.weight;
    });
  }

  generateIndices() {
    let index = 0;
    this.navigationItems.forEach(item => {
      if (!item.group && (typeof  item.showIndex !== 'undefined' && item.showIndex || typeof item.showIndex === 'undefined' && this.showMenuItemIndex)) {
        index++;
      }
      item._index = index;
    });
  }

  findItemByKeyOrCreate(key: string) {
    let finalItem = null;

    for (let key in this.navigationItems) {
      let item = this.navigationItems[key];
      if (item.key === key) {
        finalItem = item;
      }
    }

    if (!finalItem) {
      finalItem = {
        key: key
      };
      this.navigationItems.push(finalItem);
    }

    return finalItem;
  }

  getItemByKey(key) {
    let finalItem = null;

    this.navigationItems.forEach(item => {
      if (item.key === key) {
        finalItem = item;
      }
    });

    return finalItem;
  }


  public getNavigationItems() {
    this.sortByWeight();
    this.generateIndices();
    return this.navigationItems;
  }
}
