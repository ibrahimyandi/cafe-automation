import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {
  groups = [];
  products =[];
  group;
  name;
  photo;
  price;
  stocks;
  totalPrice = 0;
  alinanPara;
  datestring;

  selectedProd = [];
  selectExist =[];
  stockDetail = [];
  
  exist = false;
  faturaTarih;
  receiptId;
  cost;
  kdvPrice;
  receiptExists = false;
  ngOnInit(){}
  
  constructor(private db:AngularFireDatabase){
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
      this.groups.sort((a, b) => {
        if (a.name < b.name) return -1
        return a.name > b.name ? 1 : 0
      })
    });
    
    db.list("/products").snapshotChanges().forEach(i=>{
      this.products = i;
    });
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
  selectProduct(key){
    var iter = 0;
    this.selectedProd.forEach(i=>{
      if(key == i.key){
        this.exist = true;
        this.selectedProd[iter].count += 1;
        this.selectedProd[iter].totalPrice = this.selectedProd[iter].count * this.selectedProd[iter].data.kdvPrice;
        this.totalPrice += this.selectedProd[iter].data.kdvPrice;
      }
      iter++;
    })
    if(this.exist==false){
      this.products.forEach(element => { //TODO path ile veri ulaş.
        
        if(key == element.key){
          this.selectedProd.push({data:element.payload.val(), count:1, key:element.key, totalPrice: element.payload.val().kdvPrice,date:0});
          this.totalPrice += element.payload.val().kdvPrice;
        }
      });
    }
    this.exist = false;
  }
  key;
  sellCount;
  sell(){
    this.totalPrice = 0;
    const date = new Date();
    this.faturaTarih = date.toLocaleString('tr-TR');
    this.receiptId++;
    var newWin = window.open("");
    newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style> body{ width: 80mm; position: relative; display: block; margin: 0px; font-size: 12px; font-weight: bold; text-transform: uppercase; } .container{ margin: 10px; } .title{ text-align: center; margin-top: 4px; } span{ width: 100px; display: inline-block; } hr.dashed { border-top: 1px dashed black; } th{ width: 80px; text-align: left; } .bodyFooter{ position: relative; } .totalText{ width: 81%; } .total{ float: right; width: 19%; } .footer{ } </style> </head> <body> <div class='container'> <div class='head'> <div class='title'>SKS</div> <br> <div><span>PEŞİN MÜŞTERİ</span>&nbsp;&nbsp;</div>");
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
      var sellStock = parseFloat(x.data.cafe1Stock) - parseFloat(x.count);
      this.db.database.ref("/products/"+x.key).update({cafe1Stock:sellStock});
      //
      this.products.forEach(element=>{
        if(x.key == element.key){
          var cafeStock = x.count;
          this.stockDetail = element.payload.val().stockDetail;
          if(element.payload.val().stockDetail != undefined){
            for (let index = 0; index < this.stockDetail.length; index++) {
              this.stockDetail[index].stock -= cafeStock;
              console.log(this.stockDetail[index].stock);
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
      //
      this.db.list("/statistics/sold").push({process:"Kafe 2 satış", name: x.data.name, group: x.data.group, kdvPrice: x.data.kdvPrice, cost: x.data.cost, count: x.count, date: x.date});
    })
    newWin.document.write("</table> <hr class='dashed'> <div class='bodyFooter'> <span class='totalText'>TOPLAM TUTAR</span>");
    newWin.document.write("<span class='total'>"+this.totalPrice.toFixed(2)+"&nbsp;₺</span>");
    newWin.document.write("</div> </div> <hr class='dashed'> <div class='footer'> </div> </div> </body></html>");
    newWin.print();  
    newWin.close();
    this.totalPrice = 0;  
    this.selectedProd.splice(0,this.selectedProd.length);
    this.db.list("/receipt").set('id', this.receiptId);
    this.alinanPara = 0;
  }
  cancel(){
    this.selectedProd.splice(0,this.selectedProd.length);
    this.totalPrice = 0;
    this.alinanPara = 0;
  }
}
