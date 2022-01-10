import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SalesComponent } from './sales.component';
import { salesRoutingModule } from './sales-routing.module';
import { CommonModule } from '@angular/common';
import { searchPipe2 } from './pipe';

@NgModule({
  imports: [
    FormsModule,
    salesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    TabsModule,
    ModalModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ SalesComponent,searchPipe2 ]
})
export class SalesModule {

  sell(){
    window.print();
  }
  cancel(){
    
  }
}
