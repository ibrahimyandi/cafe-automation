import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'İstatistik',
    url: '/dashboard',
    icon: 'cil-chart-line',
  },
  {
    name: 'Stok',
    url: '/stock',
    icon: 'cil-truck'
  },
  {
    name: 'Satış',
    url: '/sell',
    icon: 'cil-money'
  },
  {
    title: true,
    name: 'Ekle / Düzenle / Sil'
  },
  {
    name: 'Ürünler',
    url: '/edit/products',
    icon: 'cil-pizza'
  },
  {
    name: 'Gruplar',
    url: '/edit/groups',
    icon: 'cil-object-group'
  }
];
