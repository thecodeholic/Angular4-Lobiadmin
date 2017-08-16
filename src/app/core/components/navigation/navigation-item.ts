export class NavigationItem {

  public title;
  public icon;
  public path;
  public weight;
  public key;
  public group;
  public showIndex;
  public _index;

  constructor(title: string, path: string, icon: string, weight: Number) {
    this.title = title;
    this.path = path;
    this.icon = icon;
    this.weight = weight;
  }
}
