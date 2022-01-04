import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'stock',
        loadChildren: () => import('./views/stock/stock.module').then(m => m.StockModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'edit/products',
        loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'edit/groups',
        loadChildren: () => import('./views/groups/groups.module').then(m => m.GroupsModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'cafe1/sales',
        loadChildren: () => import('./views/cafe1/sales/sales.module').then(m => m.SalesModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'cafe1/store',
        loadChildren: () => import('./views/cafe1/store/store.module').then(m => m.StoreModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'cafe2/sales',
        loadChildren: () => import('./views/cafe2/sales/sales.module').then(m => m.SalesModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'cafe2/store',
        loadChildren: () => import('./views/cafe2/store/store.module').then(m => m.StoreModule),
        canActivate: [AuthGuard] 
      }
    ]
  },
  {path:'**',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
