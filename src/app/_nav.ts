import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'İstatistik',
    url: '/dashboard',
    icon: 'cil-chart-line',
  },
  {
    name: 'Depo',
    url: '/stock',
    icon: 'cil-truck'
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
  },
  {
    title: true,
    name: 'Kafe 1'
  },
  {
    name: 'Satış',
    url: '/cafe1/sales',
    icon: 'cil-pizza'
  },
  {
    name: 'Stok',
    url: '/cafe1/store',
    icon: 'cil-object-group'
  },
  {
    title: true,
    name: 'Kafe 2'
  },
  {
    name: 'Satış',
    url: '/cafe2/sales',
    icon: 'cil-pizza'
  },
  {
    name: 'Stok',
    url: '/cafe2/store',
    icon: 'cil-object-group'
  }
];
