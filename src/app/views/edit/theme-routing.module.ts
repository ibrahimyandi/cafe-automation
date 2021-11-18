import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'edit'
    },
    children: [
      {
        path: '',
        redirectTo: 'products'
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Ürünler'
        }
      },
      {
        path: 'groups',
        component: GroupsComponent,
        data: {
          title: 'Gruplar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
