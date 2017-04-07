export class NavigationItem {

  private _title;
  private _icon;
  private _path;
  private _weight;

  constructor(title: string, icon: string, path: string, weight: Number) {
    this._title = title;
    this._icon = icon;
    this._path = path;
    this._weight = weight;
  }


  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }
}
