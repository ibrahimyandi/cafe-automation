import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'stock.component.html'
})
export class StockComponent implements OnInit {
  groups;
  products;
  constructor(db:AngularFireDatabase){
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });
    db.list('/products').valueChanges().subscribe(i => {
      this.products = i;
    });
  }
  ngOnInit(){}
}
