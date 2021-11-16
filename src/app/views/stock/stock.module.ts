import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";
import { StockComponent } from './stock.component';
import { stockRoutingModule } from './stock-routing.module';

@NgModule({
  imports: [
    FormsModule,
    stockRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
  ],
  declarations: [ StockComponent ]
})
export class stockModule { }
