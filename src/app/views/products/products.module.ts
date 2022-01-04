import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";
import { ProductsComponent } from './products.component';
import { stockRoutingModule } from './products-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { searchPipe2 } from './pipe';

@NgModule({
  imports: [
    FormsModule,
    stockRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ModalModule,
  ],
  declarations: [ 
    ProductsComponent,
    searchPipe2,
  ]
})
export class ProductsModule { 

}
