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
    var itemStock;
    var newCost = 0;
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    if(this.stockDetail != undefined){
      array = this.stockDetail;
      for (let index = array.length-1; index >= 0; index--) {
        itemStock = array[index].stock;
        array[index].stock -= newStock;
        if(array[index].stock > 0){
          newCost += array[index].cost * newStock;
          break;
        }
        else{
          newCost += array[index].cost * itemStock;
          newStock = array[index].stock * -1;
          array.splice(index,1);
          if(newStock == 0)
            break;
        }
      }
      newCost = newCost / stock;
      if(this.stockDetail.length > 0){
        var average = 0;
        var amount = 0;
        this.stockDetail.forEach(element => {
          average += element.cost * element.stock;
          amount += element.stock;
        });
        if(amount != 0){
          average = average / amount;
          this.db.database.ref("/products/"+this.keys).update({cost: average});
        }
        
      }
      else if(this.stockDetail.length == 1){
        this.db.database.ref("/products/"+this.keys).update({cost: this.stockDetail[0].cost});
      }
      this.db.database.ref('/products/'+ this.keys).update({stock: this.stocks - stock});
      this.db.database.ref('/products/'+ this.keys+'/stockDetail').set(array);
      this.db.list("/statistics/stock").push({process:"Depo silme", name:this.name,group:this.group,date:this.dateString,stock:oldStock,cost:-newCost});    
    }
    this.largeModal2.hide();
    this.stock = null;
  }

  addStock(stock){
    const date = new Date();
    this.dateString = date.toLocaleString('tr-TR');
    this.total = this.stocks + stock * this.prodCount;
    if(this.materialCount != 0){
      this.materialsList.forEach(x=>{
        this.products.forEach(element => {
          if(element.key == x.id){
            var stocks = element.payload.val().stock;
            stocks -= x.amount * stock;
            var newStocks = x.amount * stock;
            this.db.database.ref('/products/'+ x.id).update({stock:stocks});
            var array = [];
            if(element.payload.val().stock == 0){
              array.push({cost:element.payload.val().cost, stock:-1*newStocks});
              this.db.database.ref('/products/'+ x.id +'/stockDetail').set(array);
            }
            else if(element.payload.val().stock < 0){
              array = element.payload.val().stockDetail;
              array[0].stock = array[0].stock + newStocks * -1;
              this.db.database.ref('/products/'+ x.id +'/stockDetail').set(array);
            }
            else{
              if(element.payload.val().stockDetail != undefined){
                array = element.payload.val().stockDetail;
                for (let index = array.length; index > 0; index--) {
                  array[index-1].stock -= newStocks;
                  if(array[index-1].stock > 0){
                    break;
                  }
                  else{
                    newStocks = array[index-1].stock * -1;
                    if(index != 1)
                      array.splice(index-1,1);
                  }
                }
                this.db.database.ref('/products/'+ x.id +'/stockDetail').set(array);
                if(array.length > 0){
                  var average = 0;
                  var amount = 0;
                  array.forEach(element => {
                    average += element.cost * element.stock;
                    amount += element.stock;
                  });
                  average = average / amount;
                }
                else if(array.length == 1){
                  average = array[0].cost;
                }
                this.db.database.ref("/products/"+element.key).update({cost: average});
              }
            }
          }
        })
      })
      this.stockDetail.push({stock:stock, cost:this.cost});
      this.db.database.ref('/products/'+this.keys+'/stockDetail').update(this.stockDetail);
      this.db.database.ref('/products/'+this.keys).update({stock:this.total});
      if(this.stockDetail.length > 0){
        var average = 0;
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
      this.stockDetail = [];
    }
    else{
      if(this.stocks + stock == 0){
        this.stockDetail = [];
        this.db.database.ref("/products/"+this.keys).update({stock:0});
      }
      if(this.stocks + stock < 0){
        this.stockDetail[0].stock += stock;
        this.db.database.ref("/products/"+this.keys).update({cost:this.cost, stock:this.stocks + stock});
      }
      if(this.stocks + stock > 0){
        if(this.stocks < 0){
          var fazlalik = this.stocks + stock;
          this.stockDetail = [];
          this.stockDetail.push({cost:this.cost, stock:fazlalik});
          this.db.database.ref("/products/"+this.keys).update({cost:this.cost,stock:this.stocks + stock});
        }
        else if(this.stocks >= 0){
          this.stockDetail.push({stock:stock, cost:this.cost});
          this.db.database.ref("/products/"+this.keys).update({cost: this.cost});
          this.db.database.ref('/products/'+this.keys).update({stock:this.stocks + stock});
        }
        if(this.stockDetail.length > 1){
          if(this.stocks > 0){
            var average = 0;
            var amount = 0;
            this.stockDetail.forEach(element => {
              average += element.cost * element.stock;
              amount += element.stock;
            });
            average = average / amount;
          }
          this.db.database.ref("/products/"+this.keys).update({cost: average});
        }
      }
      else if(this.stockDetail.length == 1){
        this.db.database.ref("/products/"+this.keys).update({cost: this.stockDetail[0].cost});
      }
      this.db.database.ref('/products/'+this.keys+'/stockDetail').set(this.stockDetail);
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
    this.products.forEach(i=>{
      if(this.materialCount != 0){
        this.materialsList = i.payload.val().material;
        this.cost = 0;
        this.materialsList.forEach(x=>{
            if(this.keys == x.id){
              this.cost += x.amount * this.cost;
            }        
        });
        if(this.keys != undefined)
          this.db.database.ref('/products/'+this.keys).update({cost:this.cost});
      }
    })
  }
}
