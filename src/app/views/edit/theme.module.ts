// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { GroupsComponent } from './groups.component';
import { FormsModule } from '@angular/forms';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ThemeRoutingModule,
    ModalModule,

  ],
  declarations: [
    ProductsComponent,
    GroupsComponent
  ]
})
export class ThemeModule { }
