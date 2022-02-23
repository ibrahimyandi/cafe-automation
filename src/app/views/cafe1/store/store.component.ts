import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
  cafe1Stocks;
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
  constructor(private db:AngularFireDatabase,auth:AngularFireAuth,private router:Router){
    auth.onAuthStateChanged((user)=>{
      if(user){
        if((user.email == "cafe1@sks.com" || user.email == "admin@sks.com") == false){
          router.navigate(["/stock"]);
        }
      }
    })
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
        this.stock = element.payload.val().cafe1Stock;
        this.cafe1Stocks = element.payload.val().cafe1Stock;
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
    this.db.database.ref('/products/'+this.keys).update({cafe1Stock:this.cafe1Stocks + stock});
    this.db.list("/statistics/stock").push({process:"Kafe 1 aktarma", name:this.name,group:this.group,date:this.dateString,stock:stock,cost:0});    
    this.products.forEach(element => {
      if(element.payload.val().materialCount > 0){
        element.payload.val().material.forEach(x => {
          if(this.keys == x.id){
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
    this.cafe1Stocks = 0;
  }
  returnStock(stock){
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    this.products.forEach(element => {
      if(this.keys == element.key){
      this.stocks = element.payload.val().stock;
      this.name = element.payload.val().name;
      this.group = element.payload.val().group;
      this.cafe1Stocks = element.payload.val().cafe1Stock;
      this.stock = element.payload.val().stock;
      this.prodCount = element.payload.val().prodCount;
      this.materialsList = element.payload.val().material;
      this.materialCount = element.payload.val().materialCount;
      }
    });
    //this.db.database.ref('/products/'+this.keys).update({stock:this.stock});
    this.db.database.ref('/products/'+this.keys).update({cafe1Stock:this.cafe1Stocks - stock});
    this.cafe1Stocks = 0;
    this.stock = 0;
    this.largeModal2.hide();
    this.db.list("/statistics/stock").push({process:"Kafe 1 çöp",name:this.name,group:this.group,date:this.dateString,stock:stock,cost:0});
    this.stock=null;
  }
}
