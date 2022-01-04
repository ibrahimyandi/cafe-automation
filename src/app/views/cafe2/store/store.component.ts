import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('largeModal2') public largeModal2: ModalDirective;
  search;
  group;
  name;
  photo;
  kdvPrice;
  cafe2Stocks;
  stocks = 0;
  total = 0;
  keys;
  modalStock = null;
  stock = null;
  groups;
  materialCount = 0;
  products;
  kdv;
  cost;
  stockDetail = [];
  product = []
  oldCost = 0;
  prodCount = 1;
  materialsList = [];
  modalDetail = [];
  dateString;
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
    this.products.forEach(element => {
      if(key == element.key){
        this.product = element;
        this.group = element.payload.val().group;
        this.name = element.payload.val().name;
        this.photo = element.payload.val().photo;
        this.kdv = element.payload.val().kdv;
        this.kdvPrice = element.payload.val().kdvPrice;
        this.stockDetail = element.payload.val().stockDetail;
        this.cost = element.payload.val().cost;
        this.oldCost = element.payload.val().cost;
        this.stocks = element.payload.val().stock;
        this.stock = element.payload.val().cafe2Stock;
        this.cafe2Stocks = element.payload.val().cafe2Stock;
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
    this.db.database.ref('/products/'+this.keys).update({stock:this.stocks - stock});
    if(this.stockDetail.length > 0){
      var average = 0;
      var amount = 0;
      this.stockDetail.forEach(element => {
        average += element.cost * element.stock;
        amount += element.stock;
      });
      average = average / amount;
      this.db.database.ref("/products/"+this.keys).update({cost: average});
    }
    else if(this.stockDetail.length == 1){
      this.db.database.ref("/products/"+this.keys).update({cost: this.stockDetail[0].cost});
    }
    this.db.database.ref('/products/'+this.keys+'/stockDetail').set(this.stockDetail);
    this.db.database.ref('/products/'+this.keys).update({cafe2Stock:this.cafe2Stocks + stock});
    this.db.list("/statistics/stock").push({process:"Kafe 2 aktarma", name:this.name,group:this.group,date:this.dateString,stock:stock,cost:0});    
    this.products.forEach(element => {
      if(element.payload.val().materialCount > 0){
        element.payload.val().material.forEach(x => {
          if(this.keys == x.id){
            console.log(element.payload.val().cost, this.cost, average);
            this.db.database.ref("/products/"+ element.key).update({cost: element.payload.val().cost - this.oldCost + average});
            return;
          }
        });
      }
    });

    this.largeModal.hide();
    this.total = 0;
    this.stock = null;
    this.stocks = 0;
    this.cafe2Stocks = 0;
  }
  returnStock(stock){
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    this.products.forEach(element => {
      if(this.keys == element.key){
      this.name = element.payload.val().name;
      this.group = element.payload.val().group;
      this.photo = element.payload.val().photo;
      this.cafe2Stocks = element.payload.val().cafe2Stock;
      }
    });
    //this.db.database.ref('/products/'+this.keys).update({stock:this.stock + stock});
    this.db.database.ref('/products/'+this.keys).update({cafe2Stock:this.cafe2Stocks - stock});
    this.cafe2Stocks = 0;
    //this.stock = 0;
    this.largeModal2.hide();
    //this.db.list("/statistics/stock").push({process:"Kafe 2 iade",name:this.name,group:this.group,date:this.dateString,stock:stock,cost:this.cost});
    
  }
}