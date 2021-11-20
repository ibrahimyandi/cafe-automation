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
  sell(){
    var newWin = window.open("");
    newWin.document.write("<!DOCTYPE html><html lang='en'> <head> <meta charset='utf-8'> <title>SKS Fatura</title> <style>.clearfix:after { content: ''; display: table; clear: both;}a { color: #5D6975; text-decoration: underline;}body { position: relative; width: 21cm; height: 29.7cm; margin: 0 auto; color: #001028; background: #FFFFFF; font-family: Arial, sans-serif; font-size: 12px; font-family: Arial;}header { padding: 10px 0; margin-bottom: 30px;}#logo { text-align: right; margin-bottom: 10px;}#logo img { width: 90px;}h1 { border-top: 1px solid #5D6975; border-bottom: 1px solid #5D6975; color: #5D6975; font-size: 2.4em; line-height: 1.4em; font-weight: normal; text-align: center; margin: 0 0 20px 0; background: url(dimension.png);}#project { float: left;}#project span { color: #5D6975; text-align: right; width: 52px; margin-right: 10px; display: inline-block; font-size: 0.8em;}#company { float: right; text-align: right;}#project div,#company div { white-space: nowrap; }table { width: 100%; border-collapse: collapse; border-spacing: 0; margin-bottom: 20px;}table tr:nth-child(2n-1) td { background: #F5F5F5;}table th,table td { text-align: center;}table th { padding: 5px 20px; color: #5D6975; border-bottom: 1px solid #C1CED9; white-space: nowrap; font-weight: normal;}table .service,table .desc { text-align: left;}table td { padding: 20px; text-align: right;}table td.service,table td.desc { vertical-align: top;}table td.unit,table td.qty,table td.total { font-size: 1.2em;}table td.grand { border-top: 1px solid #5D6975;;}#notices .notice { color: #5D6975; font-size: 1.2em;}footer { color: #5D6975; width: 100%; height: 30px; position: absolute; bottom: 0; border-top: 1px solid #C1CED9; padding: 8px 0; text-align: center;}</style> </head> <body> <header class='clearfix'> <div id='logo'> <img src='logo.png'> </div> <h1>INVOICE 3-2-1</h1> <div id='company' class='clearfix'> <div>Company Name</div> <div>455 Foggy Heights,<br /> AZ 85004, US</div> <div>(602) 519-0450</div> <div><a href='mailto:company@example.com'>company@example.com</a></div> </div> <div id='project'> <div><span>PROJECT</span> Website development</div> <div><span>CLIENT</span> John Doe</div> <div><span>ADDRESS</span> 796 Silver Harbour, TX 79273, US</div> <div><span>EMAIL</span> <a href='mailto:john@example.com'>john@example.com</a></div> <div><span>DATE</span> August 17, 2015</div> <div><span>DUE DATE</span> September 17, 2015</div> </div> </header> <main> <table> <thead> <tr> <th>ÜRÜN ADI</th> <th>FİYAT</th> <th>ADET</th> <th>TUTAR</th> </tr> </thead> <tbody>");
    this.selectExist.forEach(x=>{
      var total = x.payload.val().price * x.payload.val().count;
      newWin.document.write("<tr>");
      newWin.document.write("<td>"+x.payload.val().name+"</td>");
      newWin.document.write("<td>"+x.payload.val().price+'₺'+"</td>");
      newWin.document.write("<td>"+x.payload.val().count+"</td>");
      newWin.document.write("<td>"+total+"</td>");
      newWin.document.write("</tr>");
      var sellStock = parseInt(x.payload.val().stock) - parseInt(x.payload.val().count);
      console.log(x.payload.val().stock,x.payload.val().count)
      this.db.database.ref("/products/"+x.key).update({stock:sellStock});
      this.db.list("/statistics").push({name:x.payload.val().name,group:x.payload.val().group, price:x.payload.val().price, count:x.payload.val().count, date:x.payload.val().date});
    })
    newWin.document.write("</tbody> <tr> <td colspan='3' class='grand total'>TOPLAM TUTAR </td> <td class='grand total'>"+this.totalPrice+"₺"+"</td> </tr> </table> ");
    newWin.document.write("<div id='notices'> <div></div> <div class='notice'></div> </div> </main> <footer> Fatura bir bilgisayarda oluşturuldu imza ve mühür olmadan geçerlidir. </footer> </body></html>");
    newWin.print();  
    newWin.close();
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
