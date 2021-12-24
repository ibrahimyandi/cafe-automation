import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'Stock.component.html'
})
export class StockComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('largeModal2') public largeModal2: ModalDirective;
  search;
  group;
  name;
  photo;
  kdvCost;
  stocks = 0;
  total = 0;
  keys;
  stock=null;
  groups;
  materialCount = 0;
  products;
  cost;
  prodCount = 1;
  materialsList = [];
  modalDetail = [];
  dateString;
  result;
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
    this.result = 1;
    this.products.forEach(element => {
      if(key == element.key){
        this.group = element.payload.val().group;
        this.name = element.payload.val().name;
        this.photo = element.payload.val().photo;
        this.kdvCost = element.payload.val().kdvCost;
        this.cost = element.payload.val().cost;
        this.stocks = element.payload.val().stock;
        this.prodCount = element.payload.val().prodCount;
        this.materialsList = element.payload.val().material;
        this.materialCount = element.payload.val().materialCount;
      }
    });
    this.keys = key;
  }

  addStock(stock){
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    this.result = 1; 
    this.total = this.stocks + stock * this.prodCount;
    if(this.materialCount != 0){
      this.materialsList.forEach(x=>{
        this.products.forEach(element => {
          if(element.key == x.id){
            var stocks = element.payload.val().stock;
            if(stocks - x.amount < 0)
              this.result = 0;
          }
        })
      });
      if(this.result == 1){
        this.materialsList.forEach(x=>{
          this.products.forEach(element => {
            if(element.key == x.id){
              var stocks = element.payload.val().stock
              this.db.database.ref('/products/'+ x.id).update({stock:stocks - x.amount});
            }
          })
        })
        this.db.database.ref('/products/'+this.keys).update({stock:this.total});
        this.largeModal.hide();
        this.total = 0;
        this.db.list("/stock").push({process:"ekleme", name:this.name,group:this.group,date:this.dateString,stock:stock, kdvCost: this.kdvCost});    
        this.stock=null;
      }
    }
    else{
      this.db.database.ref('/products/'+this.keys).update({stock:this.total});
      this.db.list("/stock").push({process:"ekleme", name:this.name,group:this.group,date:this.dateString,stock:stock, kdvCost: this.kdvCost});    
      this.largeModal.hide();
      this.total = 0;
      this.stock=null;
    }
  }
  returnStock(stock){
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    this.products.forEach(element => {
      if(this.keys == element.key){
      this.stocks = element.payload.val().stock;
      this.name = element.payload.val().name;
      this.group = element.payload.val().group;
      this.prodCount = element.payload.val().prodCount;
      this.kdvCost = element.payload.val().cost;
      this.materialsList = element.payload.val().material;
      this.materialCount = element.payload.val().materialCount;
      }
    });
    this.total = this.stocks - stock;
    this.db.database.ref('/products/'+this.keys).update({stock:this.total});
    /*
    if(this.materialCount != 0){
      this.materialsList.forEach(x=>{
        this.products.forEach(element => {
          if(element.key == x.id){
            this.total = element.payload.val().stock;
            this.db.database.ref('/products/'+ x.id).update({stock:this.total - x.amount});
          }
        })
      });
    }*/
    this.largeModal2.hide();
    this.total = 0;
    this.db.list("/stock").push({process:"iade",name:this.name,group:this.group,date:this.dateString,stock:stock, kdvCost: this.kdvCost});
    this.stock=null;
  }
}
