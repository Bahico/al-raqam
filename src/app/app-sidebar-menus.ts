type Menu =  {
  title: string;
  routerLink?: string;
  icon: string;
  children?: Menu[];
}

export const SIDEBAR_MENUS: Menu[] = [
  {
    title: 'entity.menu.dashboard',
    icon: 'dashboard',
    routerLink: 'dashboard'
  },
  {
    title: 'entity.menu.menus',
    icon: 'menu',
    children: [
      {
        title: 'entity.menu.product',
        icon: 'shopping',
        routerLink: 'product'
      },
      {
        title: 'entity.menu.sale',
        icon: 'shopping-cart',
        routerLink: 'sale'
      },
      // {
      //   title: 'Statistics Sale',
      //   icon: 'tag',
      //   routerLink: 'statistics-sale'
      // }
    ]
  }
]
