import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'stock.component.html'
})
export class StockComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  group;
  name;
  photo;
  price;
  stocks;
  total = 0;
  keys;
  groups;
  products;
  modalDetail = [];
  constructor(private db:AngularFireDatabase){
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });
    db.list('/products').snapshotChanges().forEach(i=>{
      this.products = i;
    });
  }
  ngOnInit(){}
  modalOpen(key){
    this.db.list('/products/'+key).valueChanges().forEach(x=> {
      this.modalDetail = x;
      this.group = x[0];
      this.name = x[1];
      this.photo = x[2];
      this.price = x[3];
      this.stocks = x[4];
    });
    this.keys = key;
  }
  addStock(stock){
    this.db.list('/products/'+this.keys).valueChanges().forEach(x=> {
      this.stocks = x[4];
    });
    this.total = parseInt(this.stocks) + parseInt(stock);
    console.log(this.total);
    this.db.database.ref('/products/'+this.keys).update({stock:this.total});
    this.largeModal.hide();
    this.total = 0;
  }
}
