import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  statistics = [];
  totalIncome = 0;
  stock = [];
  constructor(db:AngularFireDatabase){
     db.list('/statistics').valueChanges().subscribe(i => {
      this.statistics = i.reverse();
      this.statistics.forEach(element => {
        this.totalIncome += element.count * element.price;
      });
    });
    db.list('/stock').valueChanges().subscribe(i => {
      this.stock = i.reverse();
    });
  }
  ngOnInit(){}
}
