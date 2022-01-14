import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  table = [];
  products = [];
  openTable = [];
  selectedProd = [];
  stockDetail = [];
  tableName;
  faturaTarih;
  receiptId;
  totalPrice;
  exist = false;
  search;
  key;
  ngOnInit(){}
  
  constructor(private db:AngularFireDatabase){
    this.db.list("/products").snapshotChanges().forEach(x=>{
      this.products = x;
    })
    this.db.list("/restaurant1/table").snapshotChanges().forEach(x=>{
      this.table = x;
    })
    this.db.list("receipt").valueChanges().subscribe(x=>{
      this.db.database.ref("receipt").once('value').then(snapshot=>{
        if(snapshot.exists()){
          this.receiptId = snapshot.val().id;
        }
        else{
          this.db.list("/receipt").set('id',0); 
        }
      });
    })
  }
  tableEdit(process){
    if(process == 1){
      this.db.list("/restaurant1/table").push({name:this.table.length+1});
    }
    else{
      this.db.list("/restaurant1/table/"+this.table[this.table.length-1].payload.key).remove();
    }
  }
  modalOpen(key){
    this.table.forEach(x=>{
      if(x.payload.key == key){
        if(x.payload.val().product == undefined)
          this.selectedProd = [];
        else
          this.selectedProd = x.payload.val().product;
      }
    })
    this.largeModal.show();
    this.key = key;
  }
  selectProduct(key){
    var iter = 0;
    this.selectedProd.forEach(i=>{
      this.products.forEach(element => {
        if(key == i.key && element.key == key){
          if(element.payload.val().restaurant1Stock > this.selectedProd[iter].count){
            this.selectedProd[iter].count += 1;
            this.selectedProd[iter].totalPrice = this.selectedProd[iter].count * this.selectedProd[iter].data.kdvPrice;
            this.totalPrice += this.selectedProd[iter].data.kdvPrice;
          }
          this.exist = true;
        }
      });
      iter++;
    })
    if(this.exist==false){
      this.products.forEach(element => {
        if(key == element.key){
          this.selectedProd.push({data:element.payload.val(), count:1, key:element.key, totalPrice: element.payload.val().kdvPrice,date:0});
          this.totalPrice += element.payload.val().kdvPrice;
        }
      });
    }
    this.exist = false;
  }
  getSum(arr){
    let sum = 0;
    if(arr != undefined){
      for(let i = 0; i < arr.length; i++) {
        sum += arr[i].totalPrice;
      }
    }
    return sum;
  }
  countDecrease(index){
    this.selectedProd[index].count--;
    this.totalPrice -= this.selectedProd[index].data.kdvPrice;
    if(this.selectedProd[index].count<=0){
      this.selectedProd.splice(index,1);
    }
    else{
      this.selectedProd[index].totalPrice = this.selectedProd[index].count * this.selectedProd[index].data.kdvPrice;
    }
    if(this.selectedProd.length == 0)
      this.totalPrice = 0;
  }
  addProduct(){
    this.db.database.ref("/restaurant1/table/"+this.key).update({product:this.selectedProd});
    this.largeModal.hide();
    this.key = null;
    this.selectedProd = [];
  }

  sell(key){
    this.table.forEach(x=>{
      if(x.payload.key == key){
        this.selectedProd = x.payload.val().product;
        this.tableName = x.payload.val().name;
      }
    })
    this.totalPrice = 0;
    const date = new Date();
    this.faturaTarih = date.toLocaleString('tr-TR');
    this.receiptId++;
    var newWin = window.open("");
    newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style> body{ width: 80mm; position: relative; display: block; margin: 0px; font-size: 12px; font-weight: bold; text-transform: uppercase; } .container{ margin: 10px; } .title{ text-align: center; margin-top: 4px; } span{ width: 100px; display: inline-block; } hr.dashed { border-top: 1px dashed black; } th{ width: 80px; text-align: left; } .bodyFooter{ position: relative; } .totalText{ width: 81%; } .total{ float: right; width: 19%; } .footer{ } </style> </head> <body> <div class='container'> <div class='head'> <div class='title'>SKS</div> <br> <div><span>MASA NO</span>:&nbsp;&nbsp;"+this.tableName+"</div>");
    newWin.document.write("</div> <div><span>TARİH</span>:&nbsp;&nbsp;"+this.faturaTarih+"</div><div><span>FİŞ NO</span>:&nbsp;&nbsp;"+this.receiptId+"</div> </div> <hr class='dashed'> <div class='body'> <table> <tr> <th style='width: 40%;'>ÜRÜN ADI</th> <th style='width: 0px;'></th><th style='width: 0px;'></th> <th>FİYAT</th> <th>ADET</th> <th>TUTAR</th> </tr>")
    this.selectedProd.forEach(x=>{
      this.totalPrice += x.totalPrice;
      newWin.document.write("<tr>");
      newWin.document.write("<td colspan='3'>"+x.data.name+"</td>");
      newWin.document.write("<td>"+x.data.kdvPrice.toFixed(2)+"&nbsp;₺</td>");
      newWin.document.write("<td>"+x.count+"</td>");
      newWin.document.write("<td>"+x.totalPrice.toFixed(2)+"&nbsp;₺</td>");
      newWin.document.write("</tr>");
      x.date = this.faturaTarih;
      var sellStock = parseFloat(x.data.restaurant1Stock) - parseFloat(x.count);
      this.db.database.ref("/products/"+x.key).update({restaurant1Stock:sellStock});
      this.products.forEach(element=>{
        if(x.key == element.key){
          var cafeStock = x.count;
          this.stockDetail = element.payload.val().stockDetail;
          if(element.payload.val().stockDetail != undefined){
            for (let index = 0; index < this.stockDetail.length; index++) {
              this.stockDetail[index].stock -= cafeStock;
              if(this.stockDetail[index].stock > 0){
                break;
              }
              else if(this.stockDetail[index].stock == 0){
                break;
              }
              else{
                cafeStock = -1 * this.stockDetail[index].stock;  
              }
            }  
          }
          var iter = 0;
          this.stockDetail.forEach(i=>{
            if(i.stock <= 0){
              this.stockDetail.splice(iter, 1);
            }
            iter++;
          })
          if(this.stockDetail.length > 0){
            var average = 0;
            var amount = 0;
            this.stockDetail.forEach(element => {
              average += element.cost * element.stock;
              amount += element.stock;
            });
            average = average / amount;
            this.db.database.ref("/products/"+x.key).update({cost: average, stockDetail:this.stockDetail});
          }
          else if(this.stockDetail.length == 1){
            this.db.database.ref("/products/"+x.key).update({cost: this.stockDetail[0].cost, stockDetail:this.stockDetail});
          }
          else{
            this.db.database.ref("/products/"+x.key).update({cost: 0, stockDetail:this.stockDetail});
          }
        }
      })
      this.db.list("/statistics/sold").push({process:"Restoran 1 satış", name: x.data.name, group: x.data.group, kdvPrice: x.data.kdvPrice, cost: x.data.cost, count: x.count, date: x.date});
    })
    newWin.document.write("</table> <hr class='dashed'> <div class='bodyFooter'> <span class='totalText'>TOPLAM TUTAR</span>");
    newWin.document.write("<span class='total'>"+this.totalPrice.toFixed(2)+"&nbsp;₺</span>");
    newWin.document.write("</div> </div> <hr class='dashed'> <div class='footer'> </div> </div> </body></html>");
    newWin.print();  
    newWin.close();
    this.totalPrice = 0;  
    this.db.database.ref("/restaurant1/table/"+key+"/product").remove();
    this.db.list("/receipt").set('id', this.receiptId);
  }
}
