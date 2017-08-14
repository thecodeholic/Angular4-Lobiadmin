export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'import',
        data: {
          menu: {
            title: 'Import',
            icon: 'ion-upload',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      }
    ]
  }
];
