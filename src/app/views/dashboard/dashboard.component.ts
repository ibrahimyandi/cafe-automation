import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ExcelService } from '../../shared/services/excel.services';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'Dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  statistics = [];
  totalIncome = 0;
  totalSell = 0;
  totalCost = 0;
  stock = [];
  min1 = 0;
  max1 = 25;
  min2 = 0;
  max2 = 25;
  user;
  stockLength = 0;
  soldLength = 0;
  sellProdSearch;
  search;
  filter(value){
    return value.filter((val) => {
      console.log(val);
      return val.toLocaleLowerCase().includes(value);
    })
    
  }

  constructor(private db:AngularFireDatabase,private excel:ExcelService,auth:AngularFireAuth,private router:Router){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.user = user.email;
        if(this.user.search("admin") == -1){
          router.navigate(["/stock"]);
        }
      }
    })

    db.list('/statistics/sold').valueChanges().subscribe(i => {
      this.statistics = i.reverse();
      this.soldLength = Math.ceil(this.statistics.length/25);
      this.statistics.forEach(element => {
        this.totalIncome += (element.kdvPrice - element.cost) * element.count;
        this.totalSell += element.kdvPrice * element.count;
      });
    });
    db.list('/statistics/stock').valueChanges().subscribe(i => {
      this.stock = i.reverse();
      this.stockLength = Math.ceil(this.stock.length/25);
      this.stock.forEach(element => {
        this.totalCost += element.cost * element.stock;
      });
    });
  }
  listSold(x){
    let sum = 0;
    x.forEach(element => {
      sum += element.kdvPrice * element.count;
    });
    return sum;
  }
  listProfit(x){
    let sum = 0;
    x.forEach(element => {
      sum += element.kdvPrice * element.count - element.cost * element.count;
    });
    return sum;
  }
  listCost(x){
    let sum = 0;
    x.forEach(element => {
      sum += element.cost * element.stock;
    });
    return sum;
  }
  
  pagination(x,i){
    if(x == 1){
      this.min1 = i * 25;
      this.max1 = i * 25 + 25; 
    }
    else if(x == 2){
      this.min2 = i * 25;
      this.max2 = i * 25 + 25; 
    }
  }
  allList(x){
    if(x == 1){
      this.min1 = 0;
      this.max1 = this.statistics.length;
    }
    else if(x == 2){
      this.min2 = 0;
      this.max2 = this.stock.length;
    }
  }
  print(tableName):void{
    if(tableName="statistics"){
      this.excel.exportAsExcelFile(this.statistics,"istatistik");
      console.log("istatistik yazdır");
    }
    else{
      this.excel.exportAsExcelFile(this.stock,"stock");
      console.log("stok yazdır");
    }
  }
  clearAndExport(dataName){
    if(dataName == "statistics"){
      this.excel.exportAsExcelFile(this.statistics,"statistics");
      this.db.list("statistics").remove();
      this.totalIncome = 0;
    }
    else{
      this.excel.exportAsExcelFile(this.stock,"stock");    
      this.db.list("stock").remove();
      this.totalCost = 0;
    }
  }
  ngOnInit(){}
}
