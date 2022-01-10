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
  user;
  sellProdSearch;
  search;
  filter(value){
    return value.filter((val) => {
      return val.toLocaleLowerCase().includes(value);
    })
  }

  constructor(private db:AngularFireDatabase,private excel:ExcelService,auth:AngularFireAuth,private router:Router){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.user = user.email;
        if(this.user.search("user") != -1){
          router.navigate(["/stock"]);
        }
      }
    })

     db.list('/statistics/sold').valueChanges().subscribe(i => {
      this.statistics = i.reverse();
      this.statistics.forEach(element => {
        this.totalIncome += (element.kdvPrice - element.cost) * element.count;
        this.totalSell += element.kdvPrice * element.count;
      });
    });
    db.list('/statistics/stock').valueChanges().subscribe(i => {
      this.stock = i.reverse();
      this.stock.forEach(element => {
        this.totalCost += element.cost * element.stock;
      });
    });
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
