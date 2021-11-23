// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { GroupsComponent } from './groups.component';
import { FormsModule } from '@angular/forms';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { searchPipe3 } from './pipe';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ThemeRoutingModule,
    ModalModule,

  ],
  declarations: [
    ProductsComponent,
    GroupsComponent,
    searchPipe3,
  ]
})
export class ThemeModule { }
