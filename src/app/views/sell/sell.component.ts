import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'sell.component.html'
})
export class SellComponent implements OnInit {
  groups;
  products =[];
  group;
  name;
  photo;
  price;
  stocks;
  selected = [];
  selectedProd = [];
  totalPrice = 0;
  alinanPara;
  datestring;
  selectExist =[];
  exist = false;
  counter=1;
  ngOnInit(){}
  constructor(private db:AngularFireDatabase){
    db.list('/groups').valueChanges().subscribe(i => {
      this.groups = i;
    });

    db.list('/selected').valueChanges().subscribe(i => {
      this.totalPrice = 0;
      this.selectedProd = i;
      this.selectedProd.forEach(element => {
        this.totalPrice += element.price * element.count;
      });
    });
      this.db.list("/selected").snapshotChanges().forEach(x=>{
      this.selectExist = x;
    })
    db.list('/products').snapshotChanges().forEach(i=>{
      this.products = i;
    });
  }
  selectProduct(key){
    this.counter = 1;
    this.products.forEach(element => {
      if(key == element.key){
        this.group = element.payload.val().group;
        this.name = element.payload.val().name;
        this.photo = element.payload.val().photo;
        this.price = element.payload.val().price;
        this.stocks = element.payload.val().stock;
      }
    });
    var d = new Date();
    this.datestring = d.getDate()  + "." + (d.getMonth()+1) + "." + d.getFullYear() + "-" + d.getHours() + ":" + d.getUTCMinutes();
   
    this.selectExist.forEach(i=>{
      if(key == i.key){
        this.exist = true;
        this.counter = i.payload.val().count;
      }
    })
    if(!this.exist){
      this.db.database.ref("/selected/"+key).update({name:this.name,group:this.group,price:this.price,stock:this.stocks,count:this.counter,date:this.datestring});
    }
    else{
      this.counter +=1;
      this.db.database.ref("/selected/"+key).update({name:this.name,group:this.group,price:this.price,stock:this.stocks,count:this.counter,date:this.datestring});
    }
    this.exist = false;
    //this.totalPrice += parseInt(this.price);
  }
  key;
  sellCount;
  sell(){ //printer width = 80mm
    var newWin = window.open("");
    newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style> body{ width: 80mm; position: relative; display: block; margin: 0px; font-size: 12px; font-weight: bold; text-transform: uppercase; } .container{ margin: 10px; } .title{ text-align: center; margin-top: 4px; } span{ width: 90px; display: inline-block; } hr.dashed { border-top: 1px dashed black; } th{ width: 80px; text-align: left; } .bodyFooter{ position: relative; } .totalText{ width: 75%; } .total{ float: right; width: 25%; } .footer{ } </style> </head> <body> <div class='container'> <div class='head'> <div class='title'>SKS</div> <br> <div><span>HESAP ADI</span>:&nbsp;&nbsp;*******</div> <div><span>HESAP KODU</span>:&nbsp;&nbsp;*******</div> <div><span>HESAP TARİHİ</span>:&nbsp;&nbsp;*******</div> </div> <hr class='dashed'> <div class='body'> <table> <tr> <th>AD</th> <th>FİYAT</th> <th>ADET</th> <th>TUTAR</th> </tr>");
    this.selectExist.forEach(x=>{
      var total = x.payload.val().price * x.payload.val().count;
      newWin.document.write("<tr>");
      newWin.document.write("<td>"+x.payload.val().name+"</td>");
      newWin.document.write("<td>"+x.payload.val().price+"&nbsp;₺</td>");
      newWin.document.write("<td>"+x.payload.val().count+"</td>");
      newWin.document.write("<td>"+total+"&nbsp;₺</td>");
      newWin.document.write("</tr>");
      var sellStock = parseInt(x.payload.val().stock) - parseInt(x.payload.val().count);
      console.log(x.payload.val().stock,x.payload.val().count)
      this.db.database.ref("/products/"+x.key).update({stock:sellStock});
      this.db.list("/statistics").push({name:x.payload.val().name,group:x.payload.val().group, price:x.payload.val().price, count:x.payload.val().count, date:x.payload.val().date});
    })
    newWin.document.write("</table> <hr class='dashed'> <div class='bodyFooter'> <span class='totalText'>TOPLAM TUTAR</span>");
    newWin.document.write("<span class='total'>"+this.totalPrice+"&nbsp;₺</span>");
    newWin.document.write("</div> </div> <hr class='dashed'> <div class='footer'> </div> </div> </body></html>");
    newWin.print();  
    //newWin.close();
    this.db.list("/selected").remove();
    //this.totalPrice = 0;
    this.alinanPara = 0;
  }
  cancel(){
    this.db.list("/selected").remove();
    this.totalPrice = 0;
    this.alinanPara = 0;
  }
}
