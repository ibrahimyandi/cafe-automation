import { Component, OnInit, ViewChild } from '@angular/core';
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
  stocks = 0;
  total = 0;
  keys;
  stock=null;
  groups;
  materialCount = 0;
  products;
  cost;
  prodCount = 1;
  stockDetail = [];
  materialsList = [];
  modalDetail = [];
  oldCost = 0;
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
        this.cost = element.payload.val().cost;
        this.oldCost = element.payload.val().cost;
        if(element.payload.val().stockDetail != undefined)
          this.stockDetail = element.payload.val().stockDetail;
        this.stocks = element.payload.val().stock;
        this.prodCount = element.payload.val().prodCount;
        this.materialsList = element.payload.val().material;
        this.materialCount = element.payload.val().materialCount;
      }
    });
    this.keys = key;
  }

  deleteStock(stock){
    var array = [];
    this.products.forEach(element => {
      if(element.key == this.keys){
        array = element.payload.val().stockDetail;
      }
    });
    var oldStock = stock;
    var newStock = stock;
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    if(this.stockDetail != undefined){
      array = this.stockDetail;
      for (let index = array.length-1; index > 0; index--) {
        array[index].stock -= newStock;
        if(array[index].stock > 0){
          break;
        }
        else{
          newStock = array[index].stock * -1;
          array.splice(index,1);
        }
      }
      this.db.database.ref('/products/'+ this.keys).update({stock: this.stocks - stock});
      this.db.database.ref('/products/'+ this.keys+'/stockDetail').set(array);
      this.db.list("/statistics/stock").push({process:"Depo silme", name:this.name,group:this.group,date:this.dateString,stock:oldStock,cost:0});    
    }
    this.largeModal2.hide();
    this.stock = null;
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
            if(stocks - x.amount * stock < 0)
              this.result = 0;
          }
        })
      });
      if(this.result == 1){
        this.materialsList.forEach(x=>{
          this.products.forEach(element => {
            if(element.key == x.id){
              var stocks = element.payload.val().stock;
              stocks -= x.amount * stock;
              this.db.database.ref('/products/'+ x.id).update({stock:stocks});
            }
          })
        })
        this.stockDetail.push({stock:stock, cost:this.cost});
        this.db.database.ref('/products/'+this.keys+'/stockDetail').update(this.stockDetail);
        this.db.database.ref('/products/'+this.keys).update({stock:this.total});
        var average = 0;
        if(this.stockDetail.length > 0){
          var amount = 0;
          this.stockDetail.forEach(element => {
            average += element.cost * element.stock;
            amount += element.stock;
          });
          average = average / amount;
        }
        else if(this.stockDetail.length == 1){
          average = this.stockDetail[0].cost;
        }
        this.db.database.ref("/products/"+this.keys).update({cost: average});
        this.largeModal.hide();
        this.total = 0;
        this.db.list("/statistics/stock").push({process:"Depo ekleme", name:this.name,group:this.group,date:this.dateString,stock:stock,cost:this.oldCost});    
        this.stock=null;
      }
    }
    else{
      this.stockDetail.push({stock:stock, cost:this.cost});
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
      this.db.database.ref('/products/'+this.keys+'/stockDetail').update(this.stockDetail);
      this.db.database.ref('/products/'+this.keys).update({stock:this.total});
      this.db.list("/statistics/stock").push({process:"Depo ekleme", name:this.name,group:this.group,date:this.dateString,stock:stock,cost:this.cost});    
      this.largeModal.hide();
      this.total = 0;
      this.stock=null;
    }
    this.products.forEach(element => {
      if(element.payload.val().materialCount > 0){
        element.payload.val().material.forEach(x => {
          if(this.keys == x.id){
            this.db.database.ref("/products/"+ element.key).update({cost: (element.payload.val().cost + (-this.oldCost + average) * x.amount) });
            return;
          }
        });
      }
    });
    this.stockDetail = [];
  }
}
