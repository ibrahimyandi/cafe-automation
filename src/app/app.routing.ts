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
        loadChildren: () => import('./views/stock/stock.module').then(m => m.stockModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'sell',
        loadChildren: () => import('./views/sell/sell.module').then(m => m.sellModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'edit',
        loadChildren: () => import('./views/edit/theme.module').then(m => m.ThemeModule),
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
