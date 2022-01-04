import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { SalesComponent } from './sales.component';
import { salesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    salesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    TabsModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ SalesComponent ]
})
export class SalesModule {

  sell(){
    window.print();
  }
  cancel(){
    
  }
}
