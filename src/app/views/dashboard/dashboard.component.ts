import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ExcelService } from '../../shared/services/excel.services';

@Component({
  templateUrl: 'Dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  statistics = [];
  totalIncome = 0;
  totalStock = 0;
  stock = [];
  sellProdSearch;
  search;
  filter(value){
    return value.filter((val) => {
      return val.toLocaleLowerCase().includes(value);
    })
  }

  constructor(private db:AngularFireDatabase,private excel:ExcelService){
     db.list('/statistics').valueChanges().subscribe(i => {
      this.statistics = i.reverse();
      this.statistics.forEach(element => {
        this.totalIncome += element.count * element.price;
      });
    });
    db.list('/stock').valueChanges().subscribe(i => {
      this.stock = i.reverse();
      this.stock.forEach(element => {
        this.totalStock += element.stock;
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
      this.totalStock = 0;
    }
  }
  ngOnInit(){}
}
